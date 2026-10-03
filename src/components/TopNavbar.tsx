import React, { useState, useEffect } from 'react';
import {
  Menu,
  BookOpen,
  Wrench,
  Sun,
  Moon,
  Coffee,
  Maximize2,
  Minimize2,
  FileCode2,
  MonitorPlay
} from 'lucide-react';
import { TrackType } from '../types/curriculum';
import { PWAInstallButton } from './PWAInstallButton';

interface TopNavbarProps {
  activeTrack: TrackType;
  onTrackChange: (track: TrackType) => void;
  activeChapterTitle: string;
  activeChapterCode: string;
  onOpenDrawer: () => void;
  onOpenStudioEditor: () => void;
  onOpenStudioOutput: () => void;
  theme: 'light' | 'sepia' | 'dark';
  onChangeTheme: (theme: 'light' | 'sepia' | 'dark') => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeTrack,
  onTrackChange,
  activeChapterTitle,
  activeChapterCode,
  onOpenDrawer,
  onOpenStudioEditor,
  onOpenStudioOutput,
  theme,
  onChangeTheme
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 border-b border-slate-800 text-slate-100 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-2">
        {/* Left: Branding & Subject Code */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center font-bold text-white shadow-sm shrink-0 font-mono text-sm">
            &lt;/&gt;
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-xs sm:text-sm font-extrabold text-white truncate tracking-tight font-ui">
                Web Design & Development - 1
              </h1>
              <span className="hidden md:inline-flex text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800/80">
                CODE: 28544
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 truncate">
              <span className="font-semibold text-sky-400 font-mono">{activeChapterCode}:</span>
              <span className="truncate">{activeChapterTitle}</span>
            </div>
          </div>
        </div>

        {/* Center: Dual-Track Segmented Switch */}
        <div className="hidden lg:flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
          <button
            onClick={() => onTrackChange('theory')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg transition ${
              activeTrack === 'theory'
                ? 'bg-sky-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Theory Units</span>
          </button>
          <button
            onClick={() => onTrackChange('practical')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg transition ${
              activeTrack === 'practical'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Practical Labs</span>
          </button>
        </div>

        {/* Right Controls: Full-Screen Code Tools, Theme, Drawer Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* 1. Full-Screen Code Editor Button */}
          <button
            onClick={onOpenStudioEditor}
            className="p-1.5 rounded-lg bg-sky-950 hover:bg-sky-900 border border-sky-800/80 text-sky-400 hover:text-sky-300 transition text-xs font-bold flex items-center gap-1 shadow-xs"
            title="Full-Screen Code Editor (HTML / CSS / JS)"
          >
            <FileCode2 className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline text-[11px] font-mono">Editor</span>
          </button>

          {/* 2. Full-Screen Live Output / Runner Button */}
          <button
            onClick={onOpenStudioOutput}
            className="p-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-800/80 text-emerald-400 hover:text-emerald-300 transition text-xs font-bold flex items-center gap-1 shadow-xs"
            title="Full-Screen Live Output / Run View"
          >
            <MonitorPlay className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline text-[11px] font-mono">Output</span>
          </button>

          {/* Theme Modes: Light, Sepia, Dark */}
          <div className="hidden sm:flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800">
            <button
              onClick={() => onChangeTheme('light')}
              className={`p-1 rounded ${theme === 'light' ? 'bg-slate-700 text-amber-300' : 'text-slate-400 hover:text-slate-200'}`}
              title="Light Mode"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onChangeTheme('sepia')}
              className={`p-1 rounded ${theme === 'sepia' ? 'bg-amber-900/60 text-amber-300' : 'text-slate-400 hover:text-slate-200'}`}
              title="Warm Sepia Reading Mode"
            >
              <Coffee className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onChangeTheme('dark')}
              className={`p-1 rounded ${theme === 'dark' ? 'bg-slate-700 text-sky-400' : 'text-slate-400 hover:text-slate-200'}`}
              title="Dark Mode"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="hidden md:flex p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* PWA Install Button */}
          <PWAInstallButton />

          {/* Right Sliding Drawer Menu Toggle Button */}
          <button
            onClick={onOpenDrawer}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-bold transition shadow-xs"
            aria-label="Open Navigation Drawer"
          >
            <Menu className="w-4 h-4 text-sky-400" />
            <span className="hidden xs:inline">Menu</span>
          </button>
        </div>
      </div>

      {/* Reading Progress Indicator Bar */}
      <div className="w-full h-0.5 bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
