function handleDownloadCounts(req, res, counts) {
  const reply = (status, payload) => {
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify(payload));
  };
  if (req.method === 'GET') return reply(200, counts.read());
  if (req.method !== 'POST') return reply(405, { error: 'Method not allowed' });
  let body = '';
  let oversized = false;
  req.on('data', chunk => {
    if (oversized) return;
    body += chunk;
    if (Buffer.byteLength(body) > 16384) {
      oversized = true;
      reply(413, { error: 'Payload too large' });
    }
  });
  req.on('end', () => {
    if (oversized) return;
    try {
      const payload = JSON.parse(body);
      reply(200, counts.record(payload.moduleIds));
    } catch (error) {
      reply(error instanceof TypeError || error instanceof SyntaxError ? 400 : 500, { error: 'Unable to record download' });
    }
  });
}
module.exports = { handleDownloadCounts };
