import React, { useState, useEffect } from 'react';
import { X, Play, RotateCcw, Monitor, Code } from 'lucide-react';
import { CodeSnippet } from '../types/curriculum';

interface LivePlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSnippet?: CodeSnippet | null;
}

export const LivePlaygroundModal: React.FC<LivePlaygroundModalProps> = ({
  isOpen,
  onClose,
  initialSnippet
}) => {
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [cssCode, setCssCode] = useState<string>('');
  const [jsCode, setJsCode] = useState<string>('');
  const [activeEditorTab, setActiveEditorTab] = useState<'html' | 'css' | 'js'>('html');
  const [srcDoc, setSrcDoc] = useState<string>('');

  useEffect(() => {
    if (initialSnippet) {
      if (initialSnippet.language === 'html') {
        setHtmlCode(initialSnippet.code);
        setCssCode('/* Add custom styles here */\nbody { padding: 16px; font-family: sans-serif; }');
        setJsCode('// Add interactive script here\nconsole.log("Playground ready");');
        setActiveEditorTab('html');
      } else if (initialSnippet.language === 'css') {
        setHtmlCode('<div class="demo-box">\n  <h2>CSS Preview Sandbox</h2>\n  <p>Modify styles in the CSS tab to see real-time changes.</p>\n</div>');
        setCssCode(initialSnippet.code);
        setJsCode('');
        setActiveEditorTab('css');
      } else if (initialSnippet.language === 'javascript') {
        setHtmlCode('<div style="padding: 20px; font-family: sans-serif;">\n  <h2>JS Execution Sandbox</h2>\n  <button id="enrollBtn" style="padding: 8px 16px; background: #0284c7; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Click Me</button>\n  <p class="enroll-status" style="margin-top: 12px; font-weight: bold;"></p>\n</div>');
        setCssCode('');
        setJsCode(initialSnippet.code);
        setActiveEditorTab('js');
      }
    } else {
      // Default template
      setHtmlCode(`<!DOCTYPE html>
<html>
<head>
  <title>BTEB 28544 Sandbox</title>
</head>
<body>
  <div class="card">
    <h1>Web Design & Development - 1</h1>
    <p>Subject Code: 28544 | BTEB Probidhan-2022</p>
    <button id="testBtn">Test Interactive Event</button>
    <div id="output"></div>
  </div>
</body>
</html>`);
      setCssCode(`body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: 0;
}
.card {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
}
h1 { color: #0284c7; font-size: 1.5rem; margin-bottom: 8px; }
button {
  background: #0284c7;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;
}
button:hover { background: #0369a1; }
#output { margin-top: 14px; font-weight: bold; color: #10b981; }`);
      setJsCode(`document.getElementById('testBtn').addEventListener('click', function() {
  document.getElementById('output').textContent = 'Event triggered successfully at ' + new Date().toLocaleTimeString();
});`);
    }
  }, [initialSnippet, isOpen]);

  const runCode = () => {
    const combined = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              ${jsCode}
            } catch (err) {
              console.error("Runtime Error:", err);
            }
          <\/script>
        </body>
      </html>
    `;
    setSrcDoc(combined);
  };

  useEffect(() => {
    if (isOpen) {
      runCode();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4 backdrop-blur-xs">
      <div className="w-full max-w-5xl h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-sky-400" />
            <h2 className="text-sm font-bold text-white font-ui">Interactive Web Code Sandbox</h2>
            <span className="text-[10px] bg-sky-950 text-sky-400 px-2 py-0.5 rounded border border-sky-800 font-mono">
              Live Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={runCode}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow transition"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Run Code</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Workspace Split */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Editor Side */}
          <div className="w-full md:w-1/2 flex flex-col border-b md:border-b-0 md:border-r border-slate-800">
            {/* Tabs */}
            <div className="flex items-center bg-slate-950 border-b border-slate-800 px-2 pt-2">
              <button
                onClick={() => setActiveEditorTab('html')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition ${
                  activeEditorTab === 'html'
                    ? 'bg-slate-900 text-sky-400 border-t-2 border-sky-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                HTML
              </button>
              <button
                onClick={() => setActiveEditorTab('css')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition ${
                  activeEditorTab === 'css'
                    ? 'bg-slate-900 text-sky-400 border-t-2 border-sky-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                CSS
              </button>
              <button
                onClick={() => setActiveEditorTab('js')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition ${
                  activeEditorTab === 'js'
                    ? 'bg-slate-900 text-sky-400 border-t-2 border-sky-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                JavaScript
              </button>
            </div>

            {/* Code Input Area */}
            <div className="flex-1 bg-slate-900 p-2 overflow-auto">
              {activeEditorTab === 'html' && (
                <textarea
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  className="w-full h-full bg-transparent text-slate-100 font-mono text-xs p-2 resize-none focus:outline-none leading-relaxed"
                  placeholder="<!-- Write HTML here -->"
                  spellCheck={false}
                />
              )}
              {activeEditorTab === 'css' && (
                <textarea
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  className="w-full h-full bg-transparent text-slate-100 font-mono text-xs p-2 resize-none focus:outline-none leading-relaxed"
                  placeholder="/* Write CSS here */"
                  spellCheck={false}
                />
              )}
              {activeEditorTab === 'js' && (
                <textarea
                  value={jsCode}
                  onChange={(e) => setJsCode(e.target.value)}
                  className="w-full h-full bg-transparent text-slate-100 font-mono text-xs p-2 resize-none focus:outline-none leading-relaxed"
                  placeholder="// Write JavaScript here"
                  spellCheck={false}
                />
              )}
            </div>
          </div>

          {/* Sandbox Preview Side */}
          <div className="w-full md:w-1/2 flex flex-col bg-white">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-100 border-b border-slate-200 text-slate-600 text-xs">
              <span className="flex items-center gap-1.5 font-medium">
                <Monitor className="w-3.5 h-3.5 text-slate-500" />
                Sandboxed Result
              </span>
              <button
                onClick={runCode}
                className="flex items-center gap-1 text-[11px] text-sky-700 hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                Refresh View
              </button>
            </div>
            <div className="flex-1 w-full h-full overflow-hidden bg-white">
              <iframe
                title="Output Preview"
                srcDoc={srcDoc}
                sandbox="allow-scripts"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
