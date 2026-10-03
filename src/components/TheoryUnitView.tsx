import React, { useState } from 'react';
import {
  Bookmark,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ShieldCheck,
  CheckCircle,
  XCircle,
  Lightbulb,
  ArrowRight,
  BookMarked
} from 'lucide-react';
import { TheoryUnit, CodeSnippet } from '../types/curriculum';
import { CodeBlock } from './CodeBlock';

interface TheoryUnitViewProps {
  unit: TheoryUnit;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  onOpenPlayground: (snippet: CodeSnippet) => void;
  onNavigateNextUnit?: () => void;
  onNavigatePrevUnit?: () => void;
}

export const TheoryUnitView: React.FC<TheoryUnitViewProps> = ({
  unit,
  bookmarks,
  onToggleBookmark,
  onOpenPlayground,
  onNavigateNextUnit,
  onNavigatePrevUnit
}) => {
  // Revealed states for self assessment questions
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});

  const toggleQuestionReveal = (qId: string) => {
    setRevealedQuestions((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleMcqSelect = (mcqId: string, optionIndex: number) => {
    setMcqAnswers((prev) => ({ ...prev, [mcqId]: optionIndex }));
  };

  const fontSizeClass = 'text-base leading-relaxed';

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 space-y-10 animate-in fade-in duration-300">
      {/* Unit Header (In English as required by policy) */}
      <header className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-extrabold bg-sky-600 text-white shadow-xs">
              {unit.code}
            </span>
            <span className="text-xs text-sky-400 font-mono font-medium">
              {unit.creditHours}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-medium font-ui">
            Subject Code: 28544
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-ui mb-3">
          {unit.title}
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 pt-4 font-sans">
          {unit.overviewBengali}
        </p>
      </header>

      {/* Sub-topics Sequential Layout */}
      <div className="space-y-8">
        {unit.subTopics.map((subTopic) => {
          const isBookmarked = bookmarks.includes(subTopic.id);

          return (
            <section
              key={subTopic.id}
              id={`topic-${subTopic.id}`}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8 shadow-sm transition-all hover:border-slate-700/80 scroll-mt-20 card-bg"
            >
              {/* Sub-topic Title & English Title */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-800/80 pb-4 mb-5">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-sky-950 text-sky-400 border border-sky-800">
                      {subTopic.code}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white font-ui">
                      {subTopic.title}
                    </h2>
                  </div>
                  <h3 className="text-xs font-medium text-slate-400 font-sans tracking-wide">
                    {subTopic.englishTitle}
                  </h3>
                </div>

                <button
                  onClick={() => onToggleBookmark(subTopic.id)}
                  className={`p-2 rounded-lg transition ${
                    isBookmarked
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                  }`}
                  title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this Sub-topic'}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Bengali Academic Explanation */}
              <div className={`text-slate-200 ${fontSizeClass} mb-6 space-y-4 font-sans`}>
                <p>{subTopic.explanationBengali}</p>
              </div>

              {/* Detailed Sections (In-Depth Technical Elaboration) */}
              {subTopic.detailedSections && subTopic.detailedSections.length > 0 && (
                <div className="space-y-5 my-6">
                  {subTopic.detailedSections.map((sec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-3"
                    >
                      <h4 className="font-bold text-sm sm:text-base text-sky-300 flex items-center gap-2 font-ui">
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                        {sec.heading}
                      </h4>
                      <p className={`text-slate-300 ${fontSizeClass} font-sans leading-relaxed`}>
                        {sec.contentBengali}
                      </p>
                      {sec.keyPoints && sec.keyPoints.length > 0 && (
                        <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-slate-300 font-sans">
                          {sec.keyPoints.map((kp, kIdx) => (
                            <li key={kIdx} className="flex items-start gap-2">
                              <span className="text-sky-400 font-mono">▸</span>
                              <span>{kp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {sec.codeSnippet && (
                        <div className="pt-2">
                          <CodeBlock
                            snippet={sec.codeSnippet}
                            onRunInPlayground={onOpenPlayground}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Comparison Table */}
              {subTopic.comparisonTable && (
                <div className="my-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                  {subTopic.comparisonTable.caption && (
                    <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs font-bold text-sky-300 font-ui">
                      {subTopic.comparisonTable.caption}
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-900/90 text-slate-300 font-mono uppercase text-[11px] border-b border-slate-800">
                        <tr>
                          {subTopic.comparisonTable.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-3 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 font-sans text-slate-300">
                        {subTopic.comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-900/40 transition">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-3 leading-relaxed">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Real-World Case Study */}
              {subTopic.realWorldCaseStudy && (
                <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-800/40 space-y-3">
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4" />
                    <span>Real-World Engineering Case Study: {subTopic.realWorldCaseStudy.title}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-sans space-y-2">
                    <p>
                      <strong className="text-indigo-300 font-ui">বাস্তব পরিস্থিতি (Scenario): </strong>
                      {subTopic.realWorldCaseStudy.scenarioBengali}
                    </p>
                    <p className="bg-indigo-950/40 p-3 rounded-lg border border-indigo-900/40 text-indigo-200">
                      <strong className="text-emerald-400 font-mono">সমাধান কৌশল (Solution): </strong>
                      {subTopic.realWorldCaseStudy.solutionBengali}
                    </p>
                  </div>
                </div>
              )}

              {/* Bullet Points / Feature breakdown */}
              {subTopic.bulletPoints && subTopic.bulletPoints.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
                  {subTopic.bulletPoints.map((bp, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90 text-xs sm:text-sm"
                    >
                      <h4 className="font-bold text-sky-300 mb-1 flex items-center gap-1.5 font-ui">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        {bp.title}
                      </h4>
                      <p className="text-slate-300 text-xs leading-relaxed">{bp.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Code Blocks */}
              {subTopic.codeSnippets &&
                subTopic.codeSnippets.map((snippet, idx) => (
                  <CodeBlock
                    key={idx}
                    snippet={snippet}
                    onRunInPlayground={onOpenPlayground}
                  />
                ))}

              {/* W3C Standards & Best Practices */}
              {subTopic.w3cStandards && subTopic.w3cStandards.length > 0 && (
                <div className="mt-5 p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2 font-ui">
                    <ShieldCheck className="w-4 h-4" />
                    <span>W3C Standards & Best Practices</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-300">
                    {subTopic.w3cStandards.map((std, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400">✔</span>
                        <span>{std}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Takeaways */}
              {subTopic.keyTakeaways && subTopic.keyTakeaways.length > 0 && (
                <div className="mt-4 p-4 rounded-xl bg-sky-950/20 border border-sky-800/30 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-sky-400 font-bold mb-2 font-ui">
                    <Lightbulb className="w-4 h-4" />
                    <span>Key Takeaways</span>
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    {subTopic.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Self-Assessment Q&A Section */}
      <section className="rounded-2xl border border-sky-800/50 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>Academic Evaluation</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1 font-ui">
            Self-Assessment Questions & Answers
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            BTEB Probidhan-2022 Examination Standard Questions (অতি সংক্ষিপ্ত ও রচনামূলক প্রশ্নাবলী)
          </p>
        </div>

        {/* Short Questions (অতি সংক্ষিপ্ত প্রশ্ন) */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-sky-300 uppercase tracking-wide font-ui">
            ১. অতি সংক্ষিপ্ত প্রশ্নাবলী (Short Questions)
          </h3>
          {unit.selfAssessment.shortQuestions.map((qa) => {
            const isRevealed = revealedQuestions[qa.id];
            return (
              <div
                key={qa.id}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4 transition"
              >
                <div
                  onClick={() => toggleQuestionReveal(qa.id)}
                  className="flex items-start justify-between gap-3 cursor-pointer select-none"
                >
                  <p className="font-semibold text-sm text-slate-200 font-sans">
                    <span className="text-sky-400 mr-2 font-mono">Q:</span>
                    {qa.q}
                  </p>
                  <div className="flex items-center gap-2 shrink-0">
                    {qa.marks && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        [{qa.marks} Marks]
                      </span>
                    )}
                    <button
                      className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-ui"
                    >
                      {isRevealed ? (
                        <>
                          <span>Hide</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Answer</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {isRevealed && (
                  <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs sm:text-sm text-emerald-300 leading-relaxed font-sans bg-emerald-950/10 p-3 rounded-lg">
                    <span className="font-bold text-emerald-400 mr-1.5 font-mono">উত্তর:</span>
                    {qa.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Broad Questions (সংক্ষিপ্ত ও রচনামূলক প্রশ্ন) */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wide font-ui">
            ২. সংক্ষিপ্ত ও রচনামূলক প্রশ্নাবলী (Broad Questions)
          </h3>
          {unit.selfAssessment.broadQuestions.map((qa) => {
            const isRevealed = revealedQuestions[qa.id];
            return (
              <div
                key={qa.id}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4 transition"
              >
                <div
                  onClick={() => toggleQuestionReveal(qa.id)}
                  className="flex items-start justify-between gap-3 cursor-pointer select-none"
                >
                  <p className="font-semibold text-sm text-slate-200 font-sans">
                    <span className="text-indigo-400 mr-2 font-mono">Q:</span>
                    {qa.q}
                  </p>
                  <div className="flex items-center gap-2 shrink-0">
                    {qa.marks && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        [{qa.marks} Marks]
                      </span>
                    )}
                    <button
                      className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-ui"
                    >
                      {isRevealed ? (
                        <>
                          <span>Hide</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Model Answer</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {isRevealed && (
                  <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans bg-slate-900 p-4 rounded-lg space-y-2">
                    <div className="font-bold text-indigo-400 text-xs font-mono uppercase">
                      আদর্শ মডেল উত্তর:
                    </div>
                    <p>{qa.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* MCQs Practice */}
        {unit.selfAssessment.mcqs.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wide font-ui">
              ৩. বহুনিবার্চনি কুইজ যাচাই (Multiple Choice Practice)
            </h3>
            {unit.selfAssessment.mcqs.map((mcq) => {
              const selected = mcqAnswers[mcq.id];
              const isAnswered = selected !== undefined;
              const isCorrect = selected === mcq.correctIndex;

              return (
                <div
                  key={mcq.id}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  <p className="font-semibold text-sm text-slate-200 mb-3 font-sans">
                    {mcq.question}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mcq.options.map((option, optIdx) => {
                      let btnStyle = 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700';

                      if (isAnswered) {
                        if (optIdx === mcq.correctIndex) {
                          btnStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-300 font-bold';
                        } else if (optIdx === selected) {
                          btnStyle = 'border-rose-500 bg-rose-950/40 text-rose-300 line-through';
                        } else {
                          btnStyle = 'border-slate-800 bg-slate-950 text-slate-500';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleMcqSelect(mcq.id, optIdx)}
                          disabled={isAnswered}
                          className={`text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{option}</span>
                          {isAnswered && optIdx === mcq.correctIndex && (
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          )}
                          {isAnswered && optIdx === selected && optIdx !== mcq.correctIndex && (
                            <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {isAnswered && (
                    <div className="mt-2.5 text-[11px] text-slate-400 italic">
                      ব্যাখ্যা: {mcq.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Chapter Navigation Pagination */}
      <footer className="flex items-center justify-between pt-6 border-t border-slate-800 font-ui text-xs">
        {onNavigatePrevUnit ? (
          <button
            onClick={onNavigatePrevUnit}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition"
          >
            ← Previous Unit
          </button>
        ) : (
          <div />
        )}

        {onNavigateNextUnit && (
          <button
            onClick={onNavigateNextUnit}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition ml-auto"
          >
            <span>Next Unit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </footer>
    </article>
  );
};
