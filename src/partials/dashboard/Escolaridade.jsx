import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function Escolaridade() {

    const chartData = {
        labels: [
            '12-01-2020', '01-01-2021', '02-01-2021',
            '03-01-2021', '04-01-2021', '05-01-2021',
        ],
        datasets: [
            // Light blue bars
            {
                label: 'Ensino fundamental',
                data: [
                    800, 1600, 900, 1300, 1950, 1700,
                ],
                backgroundColor: tailwindConfig().theme.colors.green[500],
                hoverBackgroundColor: tailwindConfig().theme.colors.green[700],
                barPercentage: 0.66,
                categoryPercentage: 0.66,
            },
            {
                label: 'Ensino médio',
                data: [
                    1800, 1900, 1100, 1300, 700, 1700,
                ],
                backgroundColor: tailwindConfig().theme.colors.teal[600],
                hoverBackgroundColor: tailwindConfig().theme.colors.teal[400],
                barPercentage: 0.66,
                categoryPercentage: 0.66,
            },
            // Blue bars
            {
                label: 'Ensino superior',
                data: [
                    900, 600, 350, 800, 200, 800,
                ],
                backgroundColor: tailwindConfig().theme.colors.lime[900],
                hoverBackgroundColor: tailwindConfig().theme.colors.lime[600],
                barPercentage: 0.66,
                categoryPercentage: 0.66,
            },
        ],
    };

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Escolaridade</h2>
            </header>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            <BarChart data={chartData} width={595} height={248} />
        </div>
    );
}

export default Escolaridade;
