import React, { useState } from 'react';
import {
  Wrench,
  ShieldAlert,
  Terminal,
  FileCode,
  AlertTriangle,
  CheckCircle2,
  FolderTree,
  ArrowRight,
  MonitorPlay
} from 'lucide-react';
import { PracticalExperiment, CodeSnippet } from '../types/curriculum';
import { CodeBlock } from './CodeBlock';

interface PracticalExperimentViewProps {
  experiment: PracticalExperiment;
  onOpenPlayground: (snippet: CodeSnippet) => void;
  onNavigateNextExp?: () => void;
  onNavigatePrevExp?: () => void;
}

export const PracticalExperimentView: React.FC<PracticalExperimentViewProps> = ({
  experiment,
  onOpenPlayground,
  onNavigateNextExp,
  onNavigatePrevExp
}) => {
  const [activeCodeFileIndex, setActiveCodeFileIndex] = useState(0);

  const fontSizeClass = 'text-base leading-relaxed';

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 space-y-10 animate-in fade-in duration-300">
      {/* Experiment Header */}
      <header className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-6 sm:p-8 border border-indigo-900/60 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-extrabold bg-indigo-600 text-white shadow-xs">
              {experiment.code}
            </span>
            <span className="text-xs text-indigo-400 font-mono font-medium">
              {experiment.periodHours}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-medium font-ui">
            Subject Code: 28544
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-ui mb-4">
          {experiment.title}
        </h1>

        {/* Objectives Box */}
        <div className="border-t border-slate-800/80 pt-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2 flex items-center gap-1.5 font-ui">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Experiment Objectives & Learning Outcomes:</span>
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-sans">
            {experiment.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">»</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Environment Setup & OSH Standards */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
          <ShieldAlert className="w-4 h-4" />
          <span>Lab Protocols</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-white font-ui">
          Environment Setup & OSH Standards (Occupational Safety & Health)
        </h2>

        {/* OSH Rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experiment.oshStandards.map((osh, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/30 text-xs sm:text-sm"
            >
              <h4 className="font-bold text-amber-300 mb-1 flex items-center gap-1.5 font-ui">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                {osh.rule}
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed font-sans">
                {osh.explanationBengali}
              </p>
            </div>
          ))}
        </div>

        {/* Required Tools & Software */}
        <div className="pt-4 border-t border-slate-800">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-1.5 font-ui">
            <Wrench className="w-3.5 h-3.5 text-sky-400" />
            <span>Required Development Tools & Software Stack</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {experiment.toolsAndSoftware.map((tool, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2.5"
              >
                <div className="p-1 rounded bg-slate-900 text-sky-400 font-mono text-xs">
                  #{idx + 1}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200 font-ui">{tool.name}</div>
                  <div className="text-[11px] text-slate-400 leading-snug">{tool.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Folder Structure */}
        <div className="pt-4 border-t border-slate-800">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5 font-ui">
            <FolderTree className="w-3.5 h-3.5 text-emerald-400" />
            <span>Standard Project Directory Tree</span>
          </h3>
          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
            <code>{experiment.projectStructure}</code>
          </pre>
        </div>
      </section>

      {/* Step-by-Step Implementation */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
            Execution Flow
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 font-ui">
            Step-by-Step Implementation
          </h2>
        </div>

        <div className="space-y-5">
          {experiment.stepByStepSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-sky-600/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold font-mono text-xs">
                  {step.stepNumber}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white font-ui">
                  {step.title}
                </h3>
              </div>

              <p className={`text-slate-300 ${fontSizeClass} font-sans mb-3`}>
                {step.instructionsBengali}
              </p>

              {step.codeSnippet && (
                <CodeBlock
                  snippet={step.codeSnippet}
                  onRunInPlayground={onOpenPlayground}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Complete Production-Ready Source Code Files */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
              Production Source Code
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5 font-ui">
              Complete Artifact Files
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {experiment.completeSourceFiles.length} Files Ready
          </span>
        </div>

        {/* Source File Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {experiment.completeSourceFiles.map((file, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCodeFileIndex(idx)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition whitespace-nowrap ${
                activeCodeFileIndex === idx
                  ? 'bg-sky-600 text-white shadow'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{file.filename || `File ${idx + 1}`}</span>
            </button>
          ))}
        </div>

        {/* Render Selected File */}
        {experiment.completeSourceFiles[activeCodeFileIndex] && (
          <CodeBlock
            snippet={experiment.completeSourceFiles[activeCodeFileIndex]}
            onRunInPlayground={onOpenPlayground}
          />
        )}
      </section>

      {/* Expected Output UI Layout / Output Terminal */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-bold">
          <MonitorPlay className="w-4 h-4" />
          <span>Output Verification</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-white font-ui">
          Expected Output UI Layout & Output Terminal
        </h2>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="text-xs text-slate-300 font-sans leading-relaxed">
            <span className="font-bold text-emerald-400 font-mono mr-1">Expected UI Layout:</span>
            {experiment.expectedOutput.uiLayoutDescription}
          </div>

          {experiment.expectedOutput.terminalLogs && (
            <div>
              <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center gap-1 font-bold">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                <span>Simulated Terminal Output</span>
              </div>
              <pre className="p-3 rounded-lg bg-black/80 font-mono text-xs text-slate-300 overflow-x-auto border border-slate-800">
                <code>{experiment.expectedOutput.terminalLogs}</code>
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* Common Errors & Debugging Checklist */}
      <section className="rounded-2xl border border-rose-900/40 bg-slate-900/70 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider font-bold">
          <AlertTriangle className="w-4 h-4" />
          <span>Troubleshooting</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-white font-ui">
          Common Errors & Debugging Checklist
        </h2>

        <div className="space-y-3">
          {experiment.debuggingChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2 text-xs sm:text-sm"
            >
              <div className="font-bold text-rose-400 font-mono flex items-center gap-2">
                <span>⚠️</span>
                <span>{item.errorTitle}</span>
              </div>
              <div className="text-slate-300 font-sans">
                <span className="font-semibold text-slate-400">সম্ভাব্য কারণ: </span>
                {item.causeBengali}
              </div>
              <div className="text-emerald-300 font-sans bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-900/30">
                <span className="font-bold text-emerald-400 font-mono">সমাধান (Fix): </span>
                {item.fixBengali}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiment Pagination */}
      <footer className="flex items-center justify-between pt-6 border-t border-slate-800 font-ui text-xs">
        {onNavigatePrevExp ? (
          <button
            onClick={onNavigatePrevExp}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition"
          >
            ← Previous Lab
          </button>
        ) : (
          <div />
        )}

        {onNavigateNextExp && (
          <button
            onClick={onNavigateNextExp}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition ml-auto"
          >
            <span>Next Lab</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </footer>
    </article>
  );
};
