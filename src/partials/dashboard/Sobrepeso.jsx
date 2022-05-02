import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function Sobrepeso() {

    const chartData = {
        labels: ['Magreza', 'Sobrepeso', 'Obesidade'],
        datasets: [
            {
                label: 'Faixa de peso',
                data: [
                    35, 40, 25,
                ],
                backgroundColor: [
                    tailwindConfig().theme.colors.red[500],
                    tailwindConfig().theme.colors.red[400],
                    tailwindConfig().theme.colors.red[800],
                ],
                hoverBackgroundColor: [
                    tailwindConfig().theme.colors.green[600],
                    tailwindConfig().theme.colors.green[500],
                    tailwindConfig().theme.colors.green[900],
                ],
                hoverBorderColor: tailwindConfig().theme.colors.white,
            },
        ],
    };

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Faixas de Peso</h2>
            </header>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            <DoughnutChart data={chartData} width={389} height={260} />
        </div>
    );
}

export default Sobrepeso;
