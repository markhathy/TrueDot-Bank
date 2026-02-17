
import React, { useState } from 'react';
import { INITIAL_ACCOUNTS, CHAIN_CONFIG } from './constants';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AccountList from './components/AccountList';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'accounts' | 'transactions' | 'ai'>('dashboard');

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header activeTab={activeTab} />
        
        <main className="flex-1 overflow-y-auto p-6 space-y-8">
          {activeTab === 'dashboard' && <Dashboard accounts={INITIAL_ACCOUNTS} config={CHAIN_CONFIG} />}
          {activeTab === 'accounts' && <AccountList accounts={INITIAL_ACCOUNTS} />}
          {activeTab === 'ai' && (
            <div className="max-w-4xl mx-auto">
              <AIAssistant config={CHAIN_CONFIG} />
            </div>
          )}
          {activeTab === 'transactions' && (
             <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
                <div className="bg-slate-900 p-8 rounded-full border border-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mempool is Empty</h3>
                  <p className="text-slate-400 mt-2 max-w-sm">Connect a provider or use Truffle/Hardhat to send some transactions to this local instance.</p>
                </div>
             </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
