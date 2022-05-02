import React from 'react';
import Info from '../../utils/Info';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function AlimentacaoSaudavel() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Pratica',
        data: [
          6200, 9200, 6600, 8800, 5200, 9200,
        ],
        backgroundColor: tailwindConfig().theme.colors.orange[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Não Pratica',
        data: [
          -4000, -2600, -5350, -4000, -7500, -2000,
        ],
        backgroundColor: tailwindConfig().theme.colors.red[700],
        hoverBackgroundColor: tailwindConfig().theme.colors.orange[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Alimentação Saudável</h2>
        <Info className="ml-2" containerClassName="min-w-80">
          <div className="text-sm">Temas em saúde.</div>
        </Info>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">37</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-14%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={248} />
      </div>
    </div>
  );
}

export default AlimentacaoSaudavel;
