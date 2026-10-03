import React, { useState, useEffect } from 'react';
import { useBookState } from './hooks/useBookState';
import { theoryUnits } from './data/theoryUnits';
import { practicalExperiments } from './data/practicalExperiments';
import { CodeSnippet } from './types/curriculum';
import { TopNavbar } from './components/TopNavbar';
import { NavigationDrawer } from './components/NavigationDrawer';
import { TheoryUnitView } from './components/TheoryUnitView';
import { PracticalExperimentView } from './components/PracticalExperimentView';
import { FullScreenStudio, StudioViewMode } from './components/FullScreenStudio';
import { OfflineIndicator } from './components/OfflineIndicator';
import { RotateCcw } from 'lucide-react';

export default function App() {
  const {
    state,
    hasResumed,
    setActiveTrack,
    setActiveChapter,
    toggleBookmark,
    setTheme
  } = useBookState();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [studioMode, setStudioMode] = useState<StudioViewMode>('editor');
  const [studioSnippet, setStudioSnippet] = useState<CodeSnippet | null>(null);
  const [showResumeToast, setShowResumeToast] = useState(false);

  // Auto-resume toast indicator
  useEffect(() => {
    if (hasResumed) {
      setShowResumeToast(true);
      const timer = setTimeout(() => setShowResumeToast(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [hasResumed]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'm' || e.key === 'M') {
        setIsDrawerOpen((prev) => !prev);
      } else if (e.key === 'e' || e.key === 'E') {
        // Quick shortcut 'e' to open code editor
        handleOpenStudioEditor();
      } else if (e.key === 'o' || e.key === 'O') {
        // Quick shortcut 'o' to open output view
        handleOpenStudioOutput();
      } else if (e.key === 'Escape') {
        setIsDrawerOpen(false);
        setIsStudioOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenStudioEditor = () => {
    setStudioSnippet(null);
    setStudioMode('editor');
    setIsStudioOpen(true);
  };

  const handleOpenStudioOutput = () => {
    setStudioSnippet(null);
    setStudioMode('output');
    setIsStudioOpen(true);
  };

  const handleOpenStudioWithSnippet = (snippet: CodeSnippet) => {
    setStudioSnippet(snippet);
    setStudioMode('editor');
    setIsStudioOpen(true);
  };

  // Find active data item
  const activeTheoryUnit = theoryUnits.find((u) => u.id === state.activeChapterId) || theoryUnits[0];
  const activePracticalExp =
    practicalExperiments.find((e) => e.id === state.activeChapterId) || practicalExperiments[0];

  // Pagination for theory
  const currTheoryIndex = theoryUnits.findIndex((u) => u.id === state.activeChapterId);
  const nextTheory = currTheoryIndex >= 0 && currTheoryIndex < theoryUnits.length - 1 ? theoryUnits[currTheoryIndex + 1] : null;
  const prevTheory = currTheoryIndex > 0 ? theoryUnits[currTheoryIndex - 1] : null;

  // Pagination for practical
  const currExpIndex = practicalExperiments.findIndex((e) => e.id === state.activeChapterId);
  const nextExp = currExpIndex >= 0 && currExpIndex < practicalExperiments.length - 1 ? practicalExperiments[currExpIndex + 1] : null;
  const prevExp = currExpIndex > 0 ? practicalExperiments[currExpIndex - 1] : null;

  // Current chapter titles for top navbar
  const currentChapterTitle =
    state.activeTrack === 'theory' ? activeTheoryUnit.title : activePracticalExp.title;
  const currentChapterCode =
    state.activeTrack === 'theory' ? activeTheoryUnit.code : activePracticalExp.code;

  return (
    <div className={`min-h-screen transition-colors duration-200 theme-${state.theme}`}>
      {/* Top Application Bar with Full-Screen Editor & Output Icons */}
      <TopNavbar
        activeTrack={state.activeTrack}
        onTrackChange={setActiveTrack}
        activeChapterTitle={currentChapterTitle}
        activeChapterCode={currentChapterCode}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenStudioEditor={handleOpenStudioEditor}
        onOpenStudioOutput={handleOpenStudioOutput}
        theme={state.theme}
        onChangeTheme={setTheme}
      />

      {/* Main Educational Reader Canvas */}
      <main className="min-h-[calc(100vh-3.5rem)] pb-24">
        {state.activeTrack === 'theory' ? (
          <TheoryUnitView
            unit={activeTheoryUnit}
            bookmarks={state.bookmarks}
            onToggleBookmark={toggleBookmark}
            onOpenPlayground={handleOpenStudioWithSnippet}
            onNavigateNextUnit={nextTheory ? () => setActiveChapter(nextTheory.id) : undefined}
            onNavigatePrevUnit={prevTheory ? () => setActiveChapter(prevTheory.id) : undefined}
          />
        ) : (
          <PracticalExperimentView
            experiment={activePracticalExp}
            onOpenPlayground={handleOpenStudioWithSnippet}
            onNavigateNextExp={nextExp ? () => setActiveChapter(nextExp.id) : undefined}
            onNavigatePrevExp={prevExp ? () => setActiveChapter(prevExp.id) : undefined}
          />
        )}
      </main>

      {/* Right-Side Sliding Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeTrack={state.activeTrack}
        onTrackChange={setActiveTrack}
        activeChapterId={state.activeChapterId}
        onSelectChapter={(id, subTopicId) => {
          setActiveChapter(id);
          if (subTopicId) {
            setTimeout(() => {
              const el = document.getElementById(`topic-${subTopicId}`);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 200);
          }
        }}
        theoryUnits={theoryUnits}
        practicalExperiments={practicalExperiments}
        bookmarks={state.bookmarks}
      />

      {/* Full-Screen Code Studio (Editor & Live Output Sandbox) */}
      <FullScreenStudio
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        initialMode={studioMode}
        initialSnippet={studioSnippet}
      />

      {/* Offline Status Badge */}
      <OfflineIndicator />

      {/* Auto-Resume Confirmation Toast */}
      {showResumeToast && (
        <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-950 border border-sky-800 text-sky-200 text-xs shadow-xl animate-in slide-in-from-bottom duration-300">
          <RotateCcw className="w-3.5 h-3.5 text-sky-400 animate-spin" />
          <span>Auto-resumed at {currentChapterCode}</span>
        </div>
      )}
    </div>
  );
}
