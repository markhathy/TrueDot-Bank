
import React from 'react';

interface HeaderProps {
  activeTab: string;
}

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  return (
    <header className="h-20 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold capitalize">{activeTab}</h1>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Home</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span className="capitalize">{activeTab}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-full border border-slate-800">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-500 font-bold uppercase leading-none">Last Mined Block</span>
            <span className="text-sm font-mono font-bold text-amber-500">#0</span>
          </div>
          <div className="w-px h-6 bg-slate-800"></div>
          <div className="flex flex-col items-end">
             <span className="text-[10px] text-slate-500 font-bold uppercase leading-none">Gas Price</span>
             <span className="text-sm font-mono font-bold text-slate-300">20 Gwei</span>
          </div>
        </div>
        
        <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
