import React from 'react';
import { PricingData } from '../types';
import { USD_TO_EUR_RATE, PROVIDER_COLORS } from '../constants';

interface PricingTableProps {
  data: PricingData[];
}

export const PricingTable: React.FC<PricingTableProps> = ({ data }) => {
  return (
    <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
      <h2 className="text-2xl font-bold text-white mb-6">Tabla de Precios</h2>
      <div className="max-h-96 overflow-y-auto relative">
        <table className="w-full text-left text-gray-300">
          <thead className="text-sm text-gray-400 uppercase bg-slate-800 sticky top-0 z-10">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-l-lg">Modelo</th>
              <th scope="col" className="px-6 py-3">Precio Input (€/1M tokens)</th>
              <th scope="col" className="px-6 py-3">Precio Output (€/1M tokens)</th>
              <th scope="col" className="px-6 py-3 rounded-r-lg">Fuente</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-slate-700 hover:bg-slate-800/40">
                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                  <div className="flex items-center">
                    <span
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: PROVIDER_COLORS[item.provider] || '#ffffff' }}
                    ></span>
                    {item.model}
                  </div>
                </th>
                <td className="px-6 py-4">{(item.inputPrice * USD_TO_EUR_RATE).toFixed(2)}</td>
                <td className="px-6 py-4">{(item.outputPrice * USD_TO_EUR_RATE).toFixed(2)}</td>
                <td className="px-6 py-4">
                  <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    {item.source}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Nota: Los precios se muestran en EUR, convertidos de USD a una tasa de {USD_TO_EUR_RATE}. Los precios reales pueden variar.
      </p>
    </div>
  );
};