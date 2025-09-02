import React from 'react';
import { LeaderboardData } from '../types';

interface LeaderboardTableProps {
  data: LeaderboardData[];
}

const getScoreColor = (score: number) => {
  if (score >= 75) return 'text-green-400';
  if (score >= 50) return 'text-yellow-400';
  return 'text-red-400';
};

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ data }) => {
  return (
    <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
      <h2 className="text-2xl font-bold text-white mb-6">Clasificación de Modelos</h2>
      <div className="flex flex-col gap-2">
        {data.sort((a, b) => b.percentageScore - a.percentageScore).map((item, index) => (
          <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
              {/* FIX: Pass color as a prop instead of using inline style for better component design and to fix type errors. */}
              <item.icon className="w-6 h-6" color={item.color} />
              <span className="text-white font-semibold text-lg">{item.name}</span>
            </div>
            <div className="text-right">
              <p className={`font-bold text-xl ${getScoreColor(item.percentageScore)}`}>{item.percentageScore}%</p>
              <p className="text-xs text-gray-400">
                Score ({item.rawScore}/{item.totalQuestions}) • Answered: {item.answered}
              </p>
              <p className="text-xs text-gray-400">
                Gen: <span className={getScoreColor(item.genPercent)}>{item.genPercent}%</span> Code: <span className={getScoreColor(item.codePercent)}>{item.codePercent}%</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
