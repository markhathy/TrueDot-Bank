
import React from 'react';

interface SidebarProps {
  activeTab: 'dashboard' | 'accounts' | 'transactions' | 'ai';
  setActiveTab: (tab: 'dashboard' | 'accounts' | 'transactions' | 'ai') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ) },
    { id: 'accounts', label: 'Accounts', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ) },
    { id: 'transactions', label: 'Transactions', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ) },
    { id: 'ai', label: 'AI Assistant', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ), isNew: true },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-600/20">
          G
        </div>
        <span className="font-bold text-lg tracking-tight">GANACHE<span className="text-amber-500 font-light">CORE</span></span>
      </div>
      
      <nav className="flex-1 mt-4 px-4 space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group ${
              activeTab === item.id 
                ? 'bg-amber-600/10 text-amber-500 border border-amber-600/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className={`${activeTab === item.id ? 'text-amber-500' : 'text-slate-500 group-hover:text-slate-300'}`}>
              {item.id === 'ai' ? (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              ) : item.icon}
            </span>
            {item.label}
            {item.isNew && (
              <span className="ml-auto text-[10px] bg-amber-600 text-white px-1.5 py-0.5 rounded font-bold uppercase">AI</span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Environment</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-mono text-emerald-500">RPC: 127.0.0.1:8545</span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-xs font-mono text-blue-500">ID: 1337</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
