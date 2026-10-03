import React, { useState } from 'react';
import { Check, Copy, Play, FileCode } from 'lucide-react';
import { CodeSnippet } from '../types/curriculum';

interface CodeBlockProps {
  snippet: CodeSnippet;
  onRunInPlayground?: (snippet: CodeSnippet) => void;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ snippet, onRunInPlayground }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn('Failed to copy text', e);
    }
  };

  const isPlaygroundCompatible =
    snippet.language === 'html' || snippet.language === 'css' || snippet.language === 'javascript';

  return (
    <div className="my-4 rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-md">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-mono">
          <FileCode className="w-3.5 h-3.5 text-sky-400" />
          <span>{snippet.filename || `${snippet.language.toUpperCase()} Snippet`}</span>
          <span className="uppercase text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">
            {snippet.language}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {isPlaygroundCompatible && onRunInPlayground && (
            <button
              onClick={() => onRunInPlayground(snippet)}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-sky-600/20 text-sky-400 hover:bg-sky-600/30 border border-sky-500/30 transition text-[11px] font-semibold"
              title="Open code in interactive sandbox"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Test Live</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition text-[11px]"
            title="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-slate-200">
        <pre className="selection:bg-sky-500/30">
          <code>{snippet.code}</code>
        </pre>
      </div>

      {snippet.explanation && (
        <div className="px-4 py-2 bg-slate-900/50 border-t border-slate-900 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Note: </span>
          {snippet.explanation}
        </div>
      )}
    </div>
  );
};
