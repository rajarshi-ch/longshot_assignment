import React, { useState, useEffect, useReducer } from "react";
import AddNewModalContent from "./components/addNewModalContent";
import DeleteWarningModalContent from "./components/deleteWarningModalContent";
import FilterButton from "./components/filterButton";
import GameCard from "./components/gameCard";

import Header from "./components/header";
import Modal from "./components/modal";
import WelcomeBanner from "./components/welcomeBanner";
import gamesReducer, { INITIAL_STATE } from "./utils/gamesReducer";
import { IGameModel } from "./utils/types";

function Dashboard() {
  const [addNewModalOpen, setAddNewModalOpen] = useState(false);
  const [deleteWarningModalOpen, setDeleteWarningModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<IGameModel | null>(null);

  //const [state, dispatch] = useReducer(gamesReducer, INITIAL_STATE);

  // called when the edit button is clicked on an individual card
  function onEdit(game: IGameModel) {
    setSelectedGame(game);
    setAddNewModalOpen(true);
  }

  // called when the delete button is clicked on an individual card
  function onDelete(game: IGameModel) {
    setDeleteWarningModalOpen(true);
    setSelectedGame(game);
  }

  // function to initiate delete action
  function deleteGame(game: IGameModel) {}

  // clears the selected game when the modals are closed
  useEffect(() => {
    if (!addNewModalOpen && !deleteWarningModalOpen) {
      setSelectedGame(null);
    }
  }, [addNewModalOpen, deleteWarningModalOpen]);

  const games: Array<IGameModel> = [
    {
      id: 1,
      name: "Some Game Name",
      author: "John Doe",
      url: "https://www.acmeplus.com",
      published_date: "2021-01-01",
    },
    {
      id: 2,
      name: "Some Game Name",
      author: "John Doe",
      url: "https://www.acmeplus.com",
      published_date: "2021-01-01",
    },
    {
      id: 3,
      name: "Some Game Name",
      author: "John Doe",
      url: "https://www.acmeplus.com",
      published_date: "2021-01-01",
    },
    {
      id: 4,
      name: "Some Game Name",
      author: "John Doe",
      url: "https://www.acmeplus.com",
      published_date: "2021-01-01",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Modals */}
      <Modal
        modalOpen={deleteWarningModalOpen}
        setModalOpen={setDeleteWarningModalOpen}
      >
        <DeleteWarningModalContent
          onClose={() => setDeleteWarningModalOpen(false)}
          onDelete={deleteGame}
        />
      </Modal>
      <Modal modalOpen={addNewModalOpen} setModalOpen={setAddNewModalOpen}>
        <AddNewModalContent
          onClose={() => setAddNewModalOpen(false)}
          selectedGame={selectedGame}
        />
      </Modal>
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

                {/* Add new button */}
                <button
                  type="button"
                  className="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 "
                  onClick={() => setAddNewModalOpen(true)}
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
              {games.map((game) => (
                <GameCard game={game} onEdit={onEdit} onDelete={onDelete} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
