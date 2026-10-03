import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  RotateCcw,
  Copy,
  Check,
  FileCode2,
  MonitorPlay,
  ArrowLeft
} from 'lucide-react';
import { CodeSnippet } from '../types/curriculum';

export type StudioViewMode = 'editor' | 'output';

interface FullScreenStudioProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: StudioViewMode;
  initialSnippet?: CodeSnippet | null;
  onModeChange?: (mode: StudioViewMode) => void;
}

const STORAGE_KEY = 'bteb_full_studio_code_v4';

const DEFAULT_TEMPLATES = {
  bteb_default: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BTEB Subject 28544 Sandbox</title>
</head>
<body>
  <div class="card">
    <header class="card-header">
      <span class="badge">BTEB Probidhan-2022</span>
      <h1>Web Design & Development - 1</h1>
      <p class="subtitle">Subject Code: 28544 | Live Code Sandbox</p>
    </header>

    <main class="card-body">
      <p>Edit HTML, CSS and JavaScript directly. Click Run to preview!</p>
      
      <div class="interactive-box">
        <input type="text" id="studentInput" placeholder="Enter student name...">
        <button id="actionBtn">Enroll Student</button>
      </div>

      <div id="outputDisplay" class="output-area">
        Waiting for interaction...
      </div>
    </main>

    <footer class="card-footer">
      Diploma in Computer Science & Technology
    </footer>
  </div>
</body>
</html>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f8fafc;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card {
  background: rgba(30, 41, 59, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid #334155;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  padding: 32px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.badge {
  display: inline-block;
  background: #0284c7;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

h1 {
  font-size: 1.75rem;
  color: #38bdf8;
  margin-bottom: 6px;
}

.subtitle {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 24px;
}

.interactive-box {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

input {
  flex: 1;
  padding: 12px 16px;
  background: #0f172a;
  border: 1px solid #475569;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #38bdf8;
}

button {
  background: #0284c7;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #0369a1;
}

.output-area {
  background: #0f172a;
  border: 1px dashed #475569;
  border-radius: 8px;
  padding: 16px;
  font-size: 14px;
  color: #38bdf8;
  font-weight: 500;
  min-height: 50px;
}

.card-footer {
  margin-top: 24px;
  font-size: 12px;
  color: #64748b;
  border-top: 1px solid #334155;
  padding-top: 16px;
}`,
    js: `// Interactive DOM Script
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('studentInput');
  const btn = document.getElementById('actionBtn');
  const display = document.getElementById('outputDisplay');

  let enrolledList = [];

  btn.addEventListener('click', () => {
    const name = input.value.trim();
    if (!name) {
      display.textContent = '⚠️ Please enter a student name!';
      display.style.color = '#f87171';
      return;
    }

    enrolledList.push(name);
    display.innerHTML = '🎉 Enrolled Student: <strong>' + name + '</strong><br>Total Class Strength: ' + enrolledList.length;
    display.style.color = '#4ade80';
    input.value = '';
    input.focus();
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      btn.click();
    }
  });
});`
  }
};

export const FullScreenStudio: React.FC<FullScreenStudioProps> = ({
  isOpen,
  onClose,
  initialMode,
  initialSnippet,
  onModeChange
}) => {
  const [activeEditorTab, setActiveEditorTab] = useState<'html' | 'css' | 'js'>('html');

  // Original snapshot to support Reset functionality back to textbook code
  const originalCodeRef = useRef<{ html: string; css: string; js: string }>({
    html: DEFAULT_TEMPLATES.bteb_default.html,
    css: DEFAULT_TEMPLATES.bteb_default.css,
    js: DEFAULT_TEMPLATES.bteb_default.js
  });

  const [htmlCode, setHtmlCode] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_html`);
      if (saved) return saved;
    } catch (e) {}
    return DEFAULT_TEMPLATES.bteb_default.html;
  });

  const [cssCode, setCssCode] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_css`);
      if (saved) return saved;
    } catch (e) {}
    return DEFAULT_TEMPLATES.bteb_default.css;
  });

  const [jsCode, setJsCode] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_js`);
      if (saved) return saved;
    } catch (e) {}
    return DEFAULT_TEMPLATES.bteb_default.js;
  });

  const [srcDoc, setSrcDoc] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [resetConfirmed, setResetConfirmed] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // When initialSnippet is provided from the textbook, load it and memorize it for Reset
  useEffect(() => {
    if (initialSnippet && isOpen) {
      let initHtml = DEFAULT_TEMPLATES.bteb_default.html;
      let initCss = DEFAULT_TEMPLATES.bteb_default.css;
      let initJs = DEFAULT_TEMPLATES.bteb_default.js;

      if (initialSnippet.language === 'html') {
        initHtml = initialSnippet.code;
        setActiveEditorTab('html');
      } else if (initialSnippet.language === 'css') {
        initCss = initialSnippet.code;
        setActiveEditorTab('css');
      } else if (initialSnippet.language === 'javascript') {
        initJs = initialSnippet.code;
        setActiveEditorTab('js');
      }

      // Store in snapshot for Reset
      originalCodeRef.current = { html: initHtml, css: initCss, js: initJs };

      setHtmlCode(initHtml);
      setCssCode(initCss);
      setJsCode(initJs);
    }
  }, [initialSnippet, isOpen]);

  // Persist code to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_html`, htmlCode);
      localStorage.setItem(`${STORAGE_KEY}_css`, cssCode);
      localStorage.setItem(`${STORAGE_KEY}_js`, jsCode);
    } catch (e) {}
  }, [htmlCode, cssCode, jsCode]);

  // Compile code into iframe
  const compileCode = () => {
    const combined = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            ${cssCode}
          </style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              ${jsCode}
            } catch (err) {
              console.error("[Runtime Error]:", err);
            }
          <\/script>
        </body>
      </html>
    `;
    setSrcDoc(combined);
  };

  useEffect(() => {
    if (isOpen) {
      compileCode();
    }
  }, [isOpen, htmlCode, cssCode, jsCode]);

  // Run button handler: compiles and directly switches to the Header's Output view
  const handleRunAndShowOutput = () => {
    compileCode();
    if (onModeChange) {
      onModeChange('output');
    }
  };

  // Keyboard shortcut Ctrl+Enter to Run
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRunAndShowOutput();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, htmlCode, cssCode, jsCode]);

  // Copy current active tab's code
  const handleCopyCode = async () => {
    const currentCode =
      activeEditorTab === 'html' ? htmlCode : activeEditorTab === 'css' ? cssCode : jsCode;
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };

  // Reset to original book code snippet or default
  const handleResetCode = () => {
    const orig = originalCodeRef.current;
    setHtmlCode(orig.html);
    setCssCode(orig.css);
    setJsCode(orig.js);

    try {
      localStorage.setItem(`${STORAGE_KEY}_html`, orig.html);
      localStorage.setItem(`${STORAGE_KEY}_css`, orig.css);
      localStorage.setItem(`${STORAGE_KEY}_js`, orig.js);
    } catch (e) {}

    const combined = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>${orig.css}</style>
        </head>
        <body>
          ${orig.html}
          <script>
            try {
              ${orig.js}
            } catch (err) {
              console.error("[Runtime Error]:", err);
            }
          <\/script>
        </body>
      </html>
    `;
    setSrcDoc(combined);

    setResetConfirmed(true);
    setTimeout(() => setResetConfirmed(false), 2000);
  };

  if (!isOpen) return null;

  return (
    /* Mounted cleanly right below the header (top-14) so the main header is ALWAYS visible */
    <div className="fixed top-14 inset-x-0 bottom-0 z-30 bg-slate-950 text-slate-100 flex flex-col overflow-hidden animate-in fade-in duration-150">
      {/* ================= SINGLE CLEAN SUB-HEADER ================= */}
      {initialMode === 'editor' ? (
        /* Sub-Header for Editor: HTML, CSS, JavaScript alongside Run, Copy, Reset */
        <div className="h-11 bg-slate-900 border-b border-slate-800 px-3 sm:px-6 flex items-center justify-between gap-2 overflow-x-auto text-xs shrink-0 select-none">
          {/* Left: Language Tabs (HTML, CSS, JS) + Actions (Run, Copy, Reset) */}
          <div className="flex items-center gap-1.5 flex-nowrap shrink-0">
            {/* HTML Tab */}
            <button
              onClick={() => setActiveEditorTab('html')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md font-mono text-xs font-bold transition ${
                activeEditorTab === 'html'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span className="text-orange-400 font-extrabold">&lt;&gt;</span>
              <span>HTML</span>
            </button>

            {/* CSS Tab */}
            <button
              onClick={() => setActiveEditorTab('css')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md font-mono text-xs font-bold transition ${
                activeEditorTab === 'css'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span className="text-sky-400 font-extrabold">#</span>
              <span>CSS</span>
            </button>

            {/* JavaScript Tab */}
            <button
              onClick={() => setActiveEditorTab('js')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md font-mono text-xs font-bold transition ${
                activeEditorTab === 'js'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span className="text-yellow-400 font-extrabold">{ }</span>
              <span>JavaScript</span>
            </button>

            {/* Subtle Divider */}
            <span className="w-px h-5 bg-slate-700 mx-1 inline-block" />

            {/* 1. RUN Option: Direct execution that switches to Header's Output view */}
            <button
              onClick={handleRunAndShowOutput}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-xs font-bold shadow-xs transition"
              title="Run Code & View Live Output (Ctrl + Enter)"
            >
              <Play className="w-3.5 h-3.5 fill-current text-white" />
              <span>Run</span>
            </button>

            {/* 2. COPY Option */}
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700/60 transition"
              title="Copy active tab code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-sky-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            {/* 3. RESET Option (Restores original book code) */}
            <button
              onClick={handleResetCode}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-300 text-xs font-medium border border-slate-700/60 transition"
              title="Reset to original textbook code snippet"
            >
              {resetConfirmed ? (
                <>
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-400 font-bold">Reset Done</span>
                </>
              ) : (
                <>
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                  <span>Reset</span>
                </>
              )}
            </button>
          </div>

          {/* Right: Close Studio and Return to Book */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              className="flex items-center gap-1 p-1.5 px-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs font-semibold"
              title="Close Editor and Return to Book"
            >
              <X className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">Back to Book</span>
            </button>
          </div>
        </div>
      ) : (
        /* Sub-Header for Output: Clean indicator + Direct Switch to Editor + Back to Book */
        <div className="h-11 bg-slate-900 border-b border-slate-800 px-3 sm:px-6 flex items-center justify-between gap-2 text-xs shrink-0 select-none">
          {/* Left: Switch back to Editor button and Live badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onModeChange && onModeChange('editor')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-sky-950 hover:bg-sky-900 border border-sky-800/80 text-sky-300 text-xs font-bold transition shadow-xs"
              title="Switch back to Code Editor"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-sky-400" />
              <span>Back to Editor</span>
            </button>

            <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Output Sandbox</span>
            </div>
          </div>

          {/* Right: Close and Return to Book */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="flex items-center gap-1 p-1.5 px-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs font-semibold"
              title="Close Output and Return to Book"
            >
              <X className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">Back to Book</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= MAIN VIEWPORT CONTENT ================= */}
      <div className="flex-1 w-full h-full overflow-hidden bg-slate-950">
        {initialMode === 'editor' ? (
          /* Full-screen Editor Viewport */
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 relative bg-slate-950 p-2 sm:p-4 overflow-hidden">
              {activeEditorTab === 'html' && (
                <textarea
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  className="w-full h-full bg-transparent text-slate-100 font-mono text-xs sm:text-sm p-2 focus:outline-none resize-none leading-relaxed selection:bg-sky-500/30 font-code"
                  placeholder="<!-- Write HTML5 code here -->"
                  spellCheck={false}
                />
              )}

              {activeEditorTab === 'css' && (
                <textarea
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  className="w-full h-full bg-transparent text-sky-200 font-mono text-xs sm:text-sm p-2 focus:outline-none resize-none leading-relaxed selection:bg-sky-500/30 font-code"
                  placeholder="/* Write CSS styles here */"
                  spellCheck={false}
                />
              )}

              {activeEditorTab === 'js' && (
                <textarea
                  value={jsCode}
                  onChange={(e) => setJsCode(e.target.value)}
                  className="w-full h-full bg-transparent text-amber-100 font-mono text-xs sm:text-sm p-2 focus:outline-none resize-none leading-relaxed selection:bg-sky-500/30 font-code"
                  placeholder="// Write client-side JavaScript here"
                  spellCheck={false}
                />
              )}
            </div>

            {/* Footer Status */}
            <div className="h-7 bg-slate-900/90 border-t border-slate-800 px-4 flex items-center justify-between text-[11px] text-slate-400 font-mono shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-sky-400 font-bold">{activeEditorTab.toUpperCase()}</span>
                <span>
                  {activeEditorTab === 'html'
                    ? htmlCode.length
                    : activeEditorTab === 'css'
                    ? cssCode.length
                    : jsCode.length}{' '}
                  chars
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                  Ctrl + Enter
                </kbd>
                <span>to Run Output</span>
              </div>
            </div>
          </div>
        ) : (
          /* Full Clean Live Output Viewport (No device clutter, no extra tabs) */
          <div className="w-full h-full bg-white overflow-hidden">
            <iframe
              ref={iframeRef}
              title="Live Output Sandbox"
              srcDoc={srcDoc}
              sandbox="allow-scripts allow-modals"
              className="w-full h-full border-none bg-white block"
            />
          </div>
        )}
      </div>
    </div>
  );
};
