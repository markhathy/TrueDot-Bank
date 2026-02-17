
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Account, ChainConfig } from '../types';

interface DashboardProps {
  accounts: Account[];
  config: ChainConfig;
}

const Dashboard: React.FC<DashboardProps> = ({ accounts, config }) => {
  const chartData = accounts.map(acc => ({
    name: `Acc ${acc.index}`,
    balance: parseFloat(acc.balance)
  }));

  const stats = [
    { label: 'Network Name', value: 'Ganache Local', color: 'text-amber-500' },
    { label: 'Chain ID', value: config.chainId.toString(), color: 'text-blue-500' },
    { label: 'RPC Server', value: config.rpcUrl, color: 'text-emerald-500' },
    { label: 'Hardfork', value: config.hardfork, color: 'text-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex flex-col justify-between shadow-lg">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
            <span className={`text-xl font-bold mt-2 ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold mb-6">Balance Distribution (ETH)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: '#1e293b'}}
                  contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc'}}
                />
                <Bar dataKey="balance" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#f59e0b' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Gas Configuration</h3>
          <div className="space-y-4 flex-grow">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400 text-sm">Default Gas Price</span>
              <span className="font-mono text-amber-400 text-sm">{config.gasPrice} wei</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400 text-sm">Block Gas Limit</span>
              <span className="font-mono text-blue-400 text-sm">{config.blockGasLimit}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400 text-sm">Call Gas Limit</span>
              <span className="font-mono text-purple-400 text-sm">{config.callGasLimit}</span>
            </div>
            <div className="mt-4 p-4 bg-slate-950 rounded-lg border border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">HD Wallet Mnemonic</h4>
              <p className="text-sm font-mono text-slate-300 break-words leading-relaxed">
                {config.mnemonic}
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800">
                 <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">Base HD Path</h4>
                 <p className="text-xs font-mono text-slate-400">{config.hdPath}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
