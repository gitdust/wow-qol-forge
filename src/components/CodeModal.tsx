import React, { useState } from 'react';
import { Check, Copy, X, FileCode } from 'lucide-react';
import { useI18n } from '../i18n/react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  files: { name: string; content: string }[];
}

export const CodeModal: React.FC<CodeModalProps> = ({
  isOpen,
  onClose,
  title,
  files,
}) => {
  const { ui, f } = useI18n();
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen || files.length === 0) return null;

  const currentTab = activeTab < files.length ? activeTab : 0;
  const currentFile = files[currentTab] || files[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121722] border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#161c28]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg">
              <FileCode size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">{title}</h3>
              <p className="text-xs text-slate-400">{ui.codeModal.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? ui.codeModal.copied : ui.codeModal.copyFile}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title={ui.codeModal.close}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tabs if multiple files */}
        {files.length > 1 && (
          <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800/80 bg-[#141924]">
            {files.map((file, idx) => (
              <button
                type="button"
                key={file.name}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-2 text-xs font-mono font-medium rounded-t-lg transition-colors border-b-2 cursor-pointer ${
                  currentTab === idx
                    ? 'text-amber-400 border-amber-500 bg-[#0f131a]'
                    : 'text-slate-400 border-transparent hover:text-slate-200'
                }`}
              >
                {file.name}
              </button>
            ))}
          </div>
        )}

        {/* Code View Area */}
        <div className="flex-1 overflow-auto p-6 bg-[#0c0f15] font-mono text-xs text-slate-300 leading-relaxed select-text">
          <pre className="whitespace-pre">{currentFile.content}</pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800/80 bg-[#141924] flex items-center justify-between text-xs text-slate-400">
          <span>
            {f(ui.codeModal.lineCount, {
              count: currentFile.content.split('\n').length,
            })}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors cursor-pointer"
          >
            {ui.codeModal.closeWindow}
          </button>
        </div>
      </div>
    </div>
  );
};
