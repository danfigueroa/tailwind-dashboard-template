import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import Sobrepeso from '../partials/dashboard/Sobrepeso';
import NumeroDeAtendimentos from '../partials/dashboard/NumerodeAtendimentos';
import TiposDeUbs from '../partials/dashboard/TiposDeUbs';
import Sexo from '../partials/dashboard/Sexo';
import Escolaridade from '../partials/dashboard/Escolaridade';
import AlimentacaoSaudavel from '../partials/dashboard/AlimentacaoSaudavel';
import AtividadeFisica from '../partials/dashboard/AtividadeFisica';
import Banner from '../partials/Banner';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-12">

              {/* Faixas de peso */}
              <Sobrepeso />
              {/* Tipos de UBS */}
              <TiposDeUbs />
              {/* Sexo */}
              <Sexo />
              {/* Numero de atendimentos */}
              <NumeroDeAtendimentos />
              {/* Escolaridade */}
              <Escolaridade />
              {/* Temas em saude - alimentacao saudavel*/}
              <AlimentacaoSaudavel />
              {/* Praticas em saude - praticas corporais e atividade fisica */}
              <AtividadeFisica />


            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;