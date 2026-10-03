import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  RotateCcw,
  Monitor,
  Code,
  Smartphone,
  Tablet,
  Laptop,
  Maximize2,
  Copy,
  Check,
  Sparkles,
  FileCode2,
  MonitorPlay,
  Columns
} from 'lucide-react';
import { CodeSnippet } from '../types/curriculum';

export type StudioViewMode = 'editor' | 'output' | 'split';

interface FullScreenStudioProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: StudioViewMode;
  initialSnippet?: CodeSnippet | null;
}

const STORAGE_KEY = 'bteb_full_studio_code_v2';

const DEFAULT_TEMPLATES: Record<string, { html: string; css: string; js: string; name: string }> = {
  bteb_default: {
    name: 'BTEB 28544 Standard Sandbox',
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
      <p class="subtitle">Subject Code: 28544 | Full-Screen Live Sandbox</p>
    </header>

    <main class="card-body">
      <p>Edit HTML, CSS and JavaScript in the editor and see real-time output!</p>
      
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
    js: `// Interactive DOM Event Execution
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
  },
  unit2_semantic: {
    name: 'Unit 2: Semantic HTML5 Layout',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Unit 2 Semantic Portal</title>
</head>
<body>
  <header>
    <h1>Polytechnic Institute</h1>
    <nav>
      <a href="#about">About</a> | <a href="#courses">Courses</a>
    </nav>
  </header>
  <main>
    <article>
      <h2>Semantic Tag Hierarchy</h2>
      <p>Semantic HTML elements clearly describe their meaning to both browser and developer.</p>
    </article>
    <aside>
      <h3>W3C Fact</h3>
      <p>Using main landmark helps assistive technologies navigate quickly.</p>
    </aside>
  </main>
  <footer>
    <p>&copy; 2026 BTEB WebDev-1</p>
  </footer>
</body>
</html>`,
    css: `body { font-family: sans-serif; margin: 0; padding: 20px; background: #f8fafc; color: #1e293b; }
header { background: #0284c7; color: white; padding: 20px; border-radius: 8px; }
nav a { color: #e0f2fe; text-decoration: none; margin-right: 10px; }
main { display: flex; gap: 20px; margin-top: 20px; }
article { flex: 2; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
aside { flex: 1; background: #e2e8f0; padding: 20px; border-radius: 8px; }
footer { margin-top: 20px; text-align: center; color: #64748b; font-size: 12px; }`,
    js: `console.log('Unit 2 Semantic Template loaded.');`
  }
};

export const FullScreenStudio: React.FC<FullScreenStudioProps> = ({
  isOpen,
  onClose,
  initialMode,
  initialSnippet
}) => {
  const [mode, setMode] = useState<StudioViewMode>(initialMode);
  const [activeEditorTab, setActiveEditorTab] = useState<'html' | 'css' | 'js'>('html');
  const [viewportWidth, setViewportWidth] = useState<'full' | '1200' | '768' | '375'>('full');

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
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Sync initial mode when reopened
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
    }
  }, [isOpen, initialMode]);

  // Handle passed snippet
  useEffect(() => {
    if (initialSnippet && isOpen) {
      if (initialSnippet.language === 'html') {
        setHtmlCode(initialSnippet.code);
        setActiveEditorTab('html');
      } else if (initialSnippet.language === 'css') {
        setCssCode(initialSnippet.code);
        setActiveEditorTab('css');
      } else if (initialSnippet.language === 'javascript') {
        setJsCode(initialSnippet.code);
        setActiveEditorTab('js');
      }
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
  const compileAndRun = () => {
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
      compileAndRun();
    }
  }, [isOpen]);

  // Keyboard shortcut Ctrl+Enter to Run
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        compileAndRun();
        setMode('output');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, htmlCode, cssCode, jsCode]);

  const handleRunFullOutput = () => {
    compileAndRun();
    setMode('output');
  };

  const handleCopyCode = async () => {
    const currentCode =
      activeEditorTab === 'html' ? htmlCode : activeEditorTab === 'css' ? cssCode : jsCode;
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };

  const handleResetToTemplate = (templateKey: string) => {
    const t = DEFAULT_TEMPLATES[templateKey];
    if (t) {
      setHtmlCode(t.html);
      setCssCode(t.css);
      setJsCode(t.js);
      compileAndRun();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-slate-100 flex flex-col w-screen h-screen overflow-hidden select-none animate-in fade-in duration-200">
      {/* Top Studio Control Bar */}
      <header className="h-13 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between gap-3 shrink-0">
        {/* Left: Branding & Current Mode Badge */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-sky-600 flex items-center justify-center font-bold text-white text-xs font-mono">
            &lt;/&gt;
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xs sm:text-sm font-bold text-white font-ui">
                BTEB 28544 Code Studio
              </h2>
              <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800 font-bold">
                FULL-SCREEN
              </span>
            </div>
          </div>
        </div>

        {/* Center: View Switcher (Editor / Split / Output) */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setMode('editor')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg transition ${
              mode === 'editor'
                ? 'bg-sky-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Full-Screen Code Editor"
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Full Editor</span>
          </button>

          <button
            onClick={() => setMode('split')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg transition ${
              mode === 'split'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Side-by-Side Split View"
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Split View</span>
          </button>

          <button
            onClick={handleRunFullOutput}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg transition ${
              mode === 'output'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Full-Screen Live Output View"
          >
            <MonitorPlay className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Full Output</span>
          </button>
        </div>

        {/* Right: Actions, Template & Close */}
        <div className="flex items-center gap-2">
          {/* Quick Run Button (triggers execution) */}
          <button
            onClick={handleRunFullOutput}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow transition"
            title="Run Code and View Output (Ctrl + Enter)"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Run</span>
          </button>

          {/* Close Studio */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            title="Exit Full-Screen Studio (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Studio Viewport */}
      <div className="flex-1 flex overflow-hidden">
        {/* ================= EDITOR PANE ================= */}
        {(mode === 'editor' || mode === 'split') && (
          <div
            className={`flex flex-col bg-slate-950 border-r border-slate-800 overflow-hidden ${
              mode === 'split' ? 'w-full md:w-1/2' : 'w-full'
            }`}
          >
            {/* Editor Sub-Header (Tabs & Code Actions) */}
            <div className="h-10 bg-slate-900 border-b border-slate-800 px-3 flex items-center justify-between text-xs">
              {/* Language Tabs */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveEditorTab('html')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs font-bold transition ${
                    activeEditorTab === 'html'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-orange-400">&lt;&gt;</span>
                  <span>HTML</span>
                </button>

                <button
                  onClick={() => setActiveEditorTab('css')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs font-bold transition ${
                    activeEditorTab === 'css'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-sky-400">#</span>
                  <span>CSS</span>
                </button>

                <button
                  onClick={() => setActiveEditorTab('js')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs font-bold transition ${
                    activeEditorTab === 'js'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-yellow-400">{ }</span>
                  <span>JavaScript</span>
                </button>
              </div>

              {/* Code Utilities */}
              <div className="flex items-center gap-2">
                <select
                  onChange={(e) => handleResetToTemplate(e.target.value)}
                  defaultValue="bteb_default"
                  className="bg-slate-800 border border-slate-700 text-slate-300 text-[11px] rounded px-2 py-1 focus:outline-none"
                  title="Load Pre-built Templates"
                >
                  <option value="bteb_default">Template: BTEB Standard</option>
                  <option value="unit2_semantic">Template: Unit 2 Semantic</option>
                </select>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px]"
                  title="Copy current tab code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied</span>
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

            {/* Code Textarea Area */}
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

            {/* Editor Footer Status */}
            <div className="h-7 bg-slate-900/90 border-t border-slate-800 px-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-3">
                <span>Tab: {activeEditorTab.toUpperCase()}</span>
                <span>
                  Length:{' '}
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
                <span>to Run</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= OUTPUT / RUNNER PANE ================= */}
        {(mode === 'output' || mode === 'split') && (
          <div
            className={`flex flex-col bg-slate-900 overflow-hidden ${
              mode === 'split' ? 'w-full md:w-1/2' : 'w-full'
            }`}
          >
            {/* Output Sub-Header (Viewport toggles & Reload) */}
            <div className="h-10 bg-slate-900 border-b border-slate-800 px-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-slate-300 font-ui font-bold">
                <Monitor className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Sandboxed Output</span>
              </div>

              {/* Viewport Width Switchers */}
              <div className="flex items-center bg-slate-950 p-0.5 rounded-lg border border-slate-800">
                <button
                  onClick={() => setViewportWidth('full')}
                  className={`p-1 rounded ${
                    viewportWidth === 'full' ? 'bg-slate-800 text-sky-400' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Full Viewport Width (100%)"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewportWidth('1200')}
                  className={`p-1 rounded ${
                    viewportWidth === '1200' ? 'bg-slate-800 text-sky-400' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Desktop (1200px)"
                >
                  <Laptop className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewportWidth('768')}
                  className={`p-1 rounded ${
                    viewportWidth === '768' ? 'bg-slate-800 text-sky-400' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Tablet (768px)"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewportWidth('375')}
                  className={`p-1 rounded ${
                    viewportWidth === '375' ? 'bg-slate-800 text-sky-400' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Mobile (375px)"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Reload / Refresh View */}
              <button
                onClick={compileAndRun}
                className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700"
              >
                <RotateCcw className="w-3 h-3 text-sky-400" />
                <span>Refresh</span>
              </button>
            </div>

            {/* Iframe Viewport Container */}
            <div className="flex-1 bg-slate-950 flex justify-center items-center overflow-auto p-2">
              <div
                className="h-full bg-white rounded-lg shadow-2xl transition-all duration-300 overflow-hidden"
                style={{
                  width:
                    viewportWidth === 'full'
                      ? '100%'
                      : viewportWidth === '1200'
                      ? '1200px'
                      : viewportWidth === '768'
                      ? '768px'
                      : '375px',
                  maxWidth: '100%'
                }}
              >
                <iframe
                  ref={iframeRef}
                  title="Sandboxed Output"
                  srcDoc={srcDoc}
                  sandbox="allow-scripts allow-modals"
                  className="w-full h-full border-none bg-white"
                />
              </div>
            </div>

            {/* Output Footer Status */}
            <div className="h-7 bg-slate-900/90 border-t border-slate-800 px-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Isolated Sandbox Active</span>
              </div>
              <div>
                <span>Viewport: {viewportWidth === 'full' ? 'Fluid (100%)' : `${viewportWidth}px`}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
