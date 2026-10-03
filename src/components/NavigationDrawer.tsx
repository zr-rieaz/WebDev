import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Wrench,
  Search,
  ChevronRight,
  Bookmark,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { TheoryUnit, PracticalExperiment, TrackType } from '../types/curriculum';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTrack: TrackType;
  onTrackChange: (track: TrackType) => void;
  activeChapterId: string;
  onSelectChapter: (id: string, subTopicId?: string) => void;
  theoryUnits: TheoryUnit[];
  practicalExperiments: PracticalExperiment[];
  bookmarks: string[];
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  activeTrack,
  onTrackChange,
  activeChapterId,
  onSelectChapter,
  theoryUnits,
  practicalExperiments,
  bookmarks
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(activeChapterId);

  if (!isOpen) return null;

  // Filter theory items
  const filteredTheory = theoryUnits.filter((unit) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      unit.title.toLowerCase().includes(q) ||
      unit.code.toLowerCase().includes(q) ||
      unit.subTopics.some(
        (st) =>
          st.title.toLowerCase().includes(q) ||
          st.englishTitle.toLowerCase().includes(q) ||
          st.code.toLowerCase().includes(q)
      )
    );
  });

  // Filter practical items
  const filteredPractical = practicalExperiments.filter((exp) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      exp.title.toLowerCase().includes(q) ||
      exp.code.toLowerCase().includes(q) ||
      exp.objectives.some((obj) => obj.toLowerCase().includes(q))
    );
  });

  const toggleExpand = (id: string) => {
    setExpandedChapterId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Right Drawer Sliding Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 text-slate-100 border-l border-slate-800 shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                Table of Contents
              </div>
              <h2 className="text-sm font-bold text-white">Course Syllabus Navigation</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close Navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-3 border-b border-slate-800 bg-slate-900/50">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, units, code..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 font-ui"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-slate-400 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Dual-Track Navigation Toggle Tabs: [ Theory ] and [ Practical ] */}
          <div className="p-3 bg-slate-950/80 border-b border-slate-800">
            <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => onTrackChange('theory')}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTrack === 'theory'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Theory (Units 1–6)</span>
              </button>

              <button
                onClick={() => onTrackChange('practical')}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTrack === 'practical'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Practical (Exp 1–6)</span>
              </button>
            </div>
          </div>

          {/* Chapters List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
            {activeTrack === 'theory' ? (
              filteredTheory.length > 0 ? (
                filteredTheory.map((unit) => {
                  const isActive = activeChapterId === unit.id;
                  const isExpanded = expandedChapterId === unit.id;
                  const hasBookmark = bookmarks.some((b) => b.startsWith(unit.id));

                  return (
                    <div
                      key={unit.id}
                      className={`rounded-xl border transition overflow-hidden ${
                        isActive
                          ? 'border-sky-500 bg-sky-950/20'
                          : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                      }`}
                    >
                      {/* Unit Title Header Card */}
                      <div
                        onClick={() => {
                          onSelectChapter(unit.id);
                          toggleExpand(unit.id);
                        }}
                        className="p-3 cursor-pointer flex items-center justify-between"
                      >
                        <div className="flex items-start gap-2.5">
                          <span
                            className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                              isActive
                                ? 'bg-sky-500 text-white'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {unit.code}
                          </span>
                          <div>
                            <h3 className="text-xs font-bold text-white leading-snug">
                              {unit.title}
                            </h3>
                            <p className="text-[11px] text-slate-400 mt-0.5 font-sans">
                              {unit.subTopics.length} Sub-topics • Assessment Included
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-slate-400">
                          {hasBookmark && <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                          <ChevronRight
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-90 text-sky-400' : ''
                            }`}
                          />
                        </div>
                      </div>

                      {/* Sub-topics Dropdown */}
                      {isExpanded && (
                        <div className="border-t border-slate-800/80 bg-slate-950/90 py-1 px-2 space-y-1">
                          {unit.subTopics.map((st) => (
                            <button
                              key={st.id}
                              onClick={() => {
                                onSelectChapter(unit.id, st.id);
                                onClose();
                              }}
                              className="w-full text-left p-2 rounded-lg text-[12px] flex items-center justify-between hover:bg-slate-800 text-slate-300 hover:text-white transition group"
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span className="font-mono text-[11px] text-sky-400 shrink-0">
                                  {st.code}
                                </span>
                                <span className="truncate">{st.title}</span>
                              </div>
                              <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-slate-300 shrink-0" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-xs text-slate-500">
                  No theory units match "{searchQuery}"
                </div>
              )
            ) : filteredPractical.length > 0 ? (
              filteredPractical.map((exp) => {
                const isActive = activeChapterId === exp.id;
                const isExpanded = expandedChapterId === exp.id;

                return (
                  <div
                    key={exp.id}
                    className={`rounded-xl border transition overflow-hidden ${
                      isActive
                        ? 'border-indigo-500 bg-indigo-950/20'
                        : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                    }`}
                  >
                    <div
                      onClick={() => {
                        onSelectChapter(exp.id);
                        toggleExpand(exp.id);
                      }}
                      className="p-3 cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-start gap-2.5">
                        <span
                          className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            isActive
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {exp.code}
                        </span>
                        <div>
                          <h3 className="text-xs font-bold text-white leading-snug">
                            {exp.title}
                          </h3>
                          <p className="text-[11px] text-slate-400 mt-0.5 font-sans">
                            {exp.stepByStepSteps.length} Steps • Production Source Code
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                          isExpanded ? 'rotate-90 text-indigo-400' : ''
                        }`}
                      />
                    </div>

                    {/* Steps Dropdown */}
                    {isExpanded && (
                      <div className="border-t border-slate-800/80 bg-slate-950/90 py-1 px-2 space-y-1">
                        {exp.stepByStepSteps.map((step) => (
                          <button
                            key={step.stepNumber}
                            onClick={() => {
                              onSelectChapter(exp.id);
                              onClose();
                            }}
                            className="w-full text-left p-2 rounded-lg text-[12px] flex items-center justify-between hover:bg-slate-800 text-slate-300 hover:text-white transition group"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className="font-mono text-[11px] text-indigo-400 shrink-0">
                                Step {step.stepNumber}
                              </span>
                              <span className="truncate">{step.title}</span>
                            </div>
                            <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-slate-300 shrink-0" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-xs text-slate-500">
                No practical experiments match "{searchQuery}"
              </div>
            )}
          </div>

          {/* Footer Metadata */}
          <div className="p-3 border-t border-slate-800 bg-slate-950 text-center text-[11px] text-slate-400 font-mono">
            <span>Subject Code: 28544 | BTEB Probidhan-2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};
