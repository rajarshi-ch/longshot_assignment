import React, { useState } from "react";
import FilterButton from "./components/filterButton";
import GameCard from "./components/gameCard";

import Header from "./components/header";
import WelcomeBanner from "./components/welcomeBanner";

function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="bg-indigo-100 text-indigo-800 text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                  25
                </span>
                Games
              </div>
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />

                <button
                  type="button"
                  className="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 "
                >
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0 mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  Add New
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* <DashboardCard01 />

              <DashboardCard02 />

              <DashboardCard03 />
   */}
              <GameCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
