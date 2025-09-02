
import React from 'react';
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter, Label, LabelList, Cell } from 'recharts';
import { ModelData } from '../types';
import { USD_TO_EUR_RATE } from '../constants';

interface ModelBenchmarkChartProps {
  data: ModelData[];
}

const CustomizedLabel = (props: any) => {
  const { x, y, value } = props;
  return (
    <text x={x} y={y} dy={-12} fill="#d1d5db" fontSize={12} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomTooltip = (props: any) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        // The cost is already converted in the data passed to the chart
        const costInEur = data.cost;
        return (
            <div className="bg-slate-800 border border-slate-600 p-3 rounded-lg shadow-lg">
                <p className="font-bold text-white mb-1">{data.name}</p>
                <p className="text-sm text-slate-300">Costo: <span className="font-semibold text-amber-400">€{costInEur.toFixed(4)}</span></p>
                <p className="text-sm text-slate-300">Rendimiento: <span className="font-semibold text-cyan-400">{data.performance.toFixed(1)}%</span></p>
            </div>
        );
    }
    return null;
};

export const ModelBenchmarkChart: React.FC<ModelBenchmarkChartProps> = ({ data }) => {
  const dataWithEur = data.map(d => ({ ...d, cost: d.cost * USD_TO_EUR_RATE }));
  const domainMax = 10 * USD_TO_EUR_RATE;
  const domainMin = 0.01 * USD_TO_EUR_RATE;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        margin={{
          top: 30,
          right: 30,
          bottom: 40,
          left: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis
          type="number"
          dataKey="cost"
          name="Costo"
          scale="log"
          domain={[domainMin, domainMax]}
          allowDataOverflow
          tickFormatter={(tick) => `€${tick.toFixed(4)}`}
          stroke="#94a3b8"
          tick={{ fontSize: 12 }}
        >
            <Label value="Costo Total para Ejecutar el Modelo (EUR, Escala Logarítmica)" offset={-30} position="insideBottom" fill="#94a3b8" />
        </XAxis>
        <YAxis
          type="number"
          dataKey="performance"
          name="Rendimiento"
          unit="%"
          domain={[0, 100]}
          stroke="#94a3b8"
          tick={{ fontSize: 12 }}
        >
            <Label value="Puntuación de Rendimiento (%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fill: '#94a3b8' }} />
        </YAxis>
        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
        <Scatter name="Models" data={dataWithEur} shape="circle">
           {dataWithEur.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <LabelList dataKey="name" content={<CustomizedLabel />} />
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};
