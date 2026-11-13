const fs = require('node:fs');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

function createDownloadCounts(dataDir, moduleIds) {
  fs.mkdirSync(dataDir, { recursive: true });
  const db = new DatabaseSync(path.join(dataDir, 'downloads.sqlite'));
  db.exec('PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000; CREATE TABLE IF NOT EXISTS downloads (id TEXT PRIMARY KEY, count INTEGER NOT NULL DEFAULT 0)');
  const validIds = () => new Set(typeof moduleIds === 'function' ? moduleIds() : moduleIds);
  const increment = db.prepare('INSERT INTO downloads(id,count) VALUES (?,1) ON CONFLICT(id) DO UPDATE SET count=count+1');
  const read = () => {
    const valid = validIds();
    return Object.fromEntries(db.prepare('SELECT id,count FROM downloads').all().filter(row => valid.has(row.id)).map(row => [row.id, row.count]));
  };
  return {
    read,
    record(ids) {
      const valid = validIds();
      if (!Array.isArray(ids) || !ids.length || ids.length > 1000 || ids.some(id => typeof id !== 'string' || !valid.has(id))) {
        throw new TypeError('Invalid module IDs');
      }
      db.exec('BEGIN IMMEDIATE');
      try {
        for (const id of new Set(ids)) increment.run(id);
        db.exec('COMMIT');
      } catch (error) {
        db.exec('ROLLBACK');
        throw error;
      }
      return read();
    },
    close: () => db.close(),
  };
}
module.exports = { createDownloadCounts };
