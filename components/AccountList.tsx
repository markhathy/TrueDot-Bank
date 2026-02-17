
import React, { useState } from 'react';
import { Account } from '../types';

interface AccountListProps {
  accounts: Account[];
}

const AccountList: React.FC<AccountListProps> = ({ accounts }) => {
  const [visibleKeys, setVisibleKeys] = useState<Record<number, boolean>>({});

  const toggleKey = (idx: number) => {
    setVisibleKeys(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Simple notification would be nice but keeping it clean
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available Accounts
        </h2>
        <span className="text-xs text-slate-400 font-mono">Total: {accounts.length}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950 text-slate-400 uppercase text-xs font-medium">
            <tr>
              <th className="px-6 py-3">Index</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Balance</th>
              <th className="px-6 py-3">Private Key</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {accounts.map((acc) => (
              <tr key={acc.index} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-4 font-mono text-slate-500">({acc.index})</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-amber-400">{acc.address}</span>
                    <button 
                      onClick={() => copyToClipboard(acc.address)}
                      className="text-slate-500 hover:text-slate-300 transition-colors"
                      title="Copy Address"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-bold text-slate-100">{acc.balance} ETH</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-slate-500 text-xs">
                      {visibleKeys[acc.index] ? acc.privateKey : '••••••••••••••••••••••••••••••••••••••••••••••••••••••••'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                   <button 
                    onClick={() => toggleKey(acc.index)}
                    className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded transition-colors"
                  >
                    {visibleKeys[acc.index] ? 'Hide' : 'Reveal'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountList;
