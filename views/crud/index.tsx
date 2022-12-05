import React, { useState, useEffect, useReducer } from "react";
import AddNewModalContent from "./components/addNewModalContent";
import DeleteWarningModalContent from "./components/deleteWarningModalContent";
import FilterButton from "./components/filterButton";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./utils/database/db";

import Header from "./components/header";
import Modal from "./components/modal";
import WelcomeBanner from "./components/welcomeBanner";
import { IGameModel } from "./utils/types";
import dynamic from "next/dynamic";
import GameDetailsModalContent from "./components/gameDetailsModalContent";

const GamesList = dynamic(() => import("./components/gamesList"), {
  ssr: false,
});

function Dashboard() {
  const [addNewModalOpen, setAddNewModalOpen] = useState(false);
  const [deleteWarningModalOpen, setDeleteWarningModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<IGameModel | null>(null);

  const games = useLiveQuery(() => db.games.toArray());

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

  // function to open the details modal when details button is clicked
  function onDetails(game: IGameModel) {
    setSelectedGame(game);
    setDetailsModalOpen(true);
  }

  // function to initiate delete action
  function deleteGame(game: IGameModel) {
    db.games.delete(game.id);
    setDeleteWarningModalOpen(false);
  }

  // add a new gaem to the database
  function addNewGame(game: IGameModel) {
    db.games.add(game);
    setAddNewModalOpen(false);
  }

  //update an existing game in the database
  function updateGame(game: IGameModel) {
    db.games.update(game.id, game);
    setAddNewModalOpen(false);
  }

  // clears the selected game when the modals are closed
  useEffect(() => {
    if (!addNewModalOpen && !deleteWarningModalOpen) {
      setSelectedGame(null);
    }
  }, [addNewModalOpen, deleteWarningModalOpen]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Modals */}

      {/* Delete Warning modal */}
      <Modal
        modalOpen={deleteWarningModalOpen}
        setModalOpen={setDeleteWarningModalOpen}
      >
        <DeleteWarningModalContent
          onClose={() => setDeleteWarningModalOpen(false)}
          onDelete={() => deleteGame(selectedGame!)}
        />
      </Modal>

      {/* Add/Edit Game Modal */}
      <Modal modalOpen={addNewModalOpen} setModalOpen={setAddNewModalOpen}>
        <AddNewModalContent
          onClose={() => setAddNewModalOpen(false)}
          selectedGame={selectedGame}
          onAdd={addNewGame}
          onUpdate={updateGame}
        />
      </Modal>

      {/* Details Modal */}
      <Modal modalOpen={detailsModalOpen} setModalOpen={setDetailsModalOpen}>
        <GameDetailsModalContent
          onClose={() => setDetailsModalOpen(false)}
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
                  {games ? games.length : 0}
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

            {games && games.length === 0 && (
              <div className="w-full flex justify-center opacity-70 ">
                <img
                  src="./images/noGames.svg"
                  alt="No games"
                  className="w-1/2"
                />
              </div>
            )}
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <GamesList
                onEdit={onEdit}
                onDelete={onDelete}
                games={games}
                onDetails={onDetails}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
