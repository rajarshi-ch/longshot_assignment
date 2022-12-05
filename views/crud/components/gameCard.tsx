import React from "react";
import EditMenu from "./editMenu";

// Import utilities

function GameCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg hover:shadow-md rounded-sm border border-slate-200">
      <div className="px-5 py-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img
            src="/images/game-console.png"
            width="32"
            height="32"
            alt="Icon 01"
          />
          {/* Menu button */}
          <EditMenu className="relative inline-flex">
            <li>
              <a
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                href="#0"
              >
                Edit
              </a>
            </li>

            <li>
              <a
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                href="#0"
              >
                Delete
              </a>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Acme Plus</h2>

        <div className="flex justify-between ">
          {/* <div className="text-3xl font-bold text-slate-800 mr-2">$24,780</div> */}
          <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
            SVG
          </div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">
            New
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
