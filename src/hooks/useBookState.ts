import { useState, useEffect, useRef } from 'react';
import { TrackType } from '../types/curriculum';

interface BookState {
  activeTrack: TrackType;
  activeChapterId: string;
  theme: 'light' | 'sepia' | 'dark';
  bookmarks: string[];
  completedQuizzes: Record<string, boolean>;
  notes: Record<string, string>;
}

const STORAGE_KEY = 'bteb_webdev1_textbook_state_v1';
const SCROLL_STORAGE_KEY = 'bteb_webdev1_scroll_map';

const DEFAULT_STATE: BookState = {
  activeTrack: 'theory',
  activeChapterId: 'theory-1',
  theme: 'dark',
  bookmarks: [],
  completedQuizzes: {},
  notes: {}
};

export function useBookState() {
  const [state, setState] = useState<BookState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_STATE, ...parsed };
      }
    } catch (e) {
      console.warn('Could not read state from localStorage', e);
    }
    return DEFAULT_STATE;
  });

  const [hasResumed, setHasResumed] = useState<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save book state to localStorage', e);
    }
  }, [state]);

  // Save scroll position for active chapter
  const saveScrollPosition = (scrollY: number) => {
    try {
      const savedScrolls = JSON.parse(localStorage.getItem(SCROLL_STORAGE_KEY) || '{}');
      savedScrolls[state.activeChapterId] = scrollY;
      localStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(savedScrolls));
    } catch (e) {
      // ignore quota errors
    }
  };

  // Restore scroll position
  const getSavedScrollPosition = (chapterId: string): number => {
    try {
      const savedScrolls = JSON.parse(localStorage.getItem(SCROLL_STORAGE_KEY) || '{}');
      return savedScrolls[chapterId] || 0;
    } catch (e) {
      return 0;
    }
  };

  // Debounced window scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        saveScrollPosition(window.scrollY);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, [state.activeChapterId]);

  // Auto-restore scroll on initial mount or chapter switch
  useEffect(() => {
    const targetY = getSavedScrollPosition(state.activeChapterId);
    if (targetY > 0) {
      // Allow DOM to settle
      const timer = setTimeout(() => {
        window.scrollTo({ top: targetY, behavior: 'smooth' });
        setHasResumed(true);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setHasResumed(true);
    }
  }, [state.activeChapterId]);

  const setActiveTrack = (track: TrackType) => {
    setState((prev) => {
      const nextChapterId = track === 'theory' ? 'theory-1' : 'exp-1';
      return {
        ...prev,
        activeTrack: track,
        activeChapterId: nextChapterId
      };
    });
  };

  const setActiveChapter = (chapterId: string) => {
    // save current scroll before switching
    saveScrollPosition(window.scrollY);
    setState((prev) => ({
      ...prev,
      activeChapterId: chapterId,
      activeTrack: chapterId.startsWith('theory-') ? 'theory' : 'practical'
    }));
  };

  const toggleBookmark = (id: string) => {
    setState((prev) => {
      const exists = prev.bookmarks.includes(id);
      return {
        ...prev,
        bookmarks: exists ? prev.bookmarks.filter((b) => b !== id) : [...prev.bookmarks, id]
      };
    });
  };

  const setTheme = (theme: 'light' | 'sepia' | 'dark') => {
    setState((prev) => ({ ...prev, theme }));
  };

  const toggleQuizAnswer = (quizId: string) => {
    setState((prev) => ({
      ...prev,
      completedQuizzes: {
        ...prev.completedQuizzes,
        [quizId]: !prev.completedQuizzes[quizId]
      }
    }));
  };

  const saveNote = (id: string, noteText: string) => {
    setState((prev) => ({
      ...prev,
      notes: {
        ...prev.notes,
        [id]: noteText
      }
    }));
  };

  return {
    state,
    hasResumed,
    setActiveTrack,
    setActiveChapter,
    toggleBookmark,
    setTheme,
    toggleQuizAnswer,
    saveNote
  };
}
