import { useState, useEffect } from "react";
import { formatToDBDate } from "../utils/dateFns";
import { IGameModel } from "../utils/types";
import ModalHeader from "./modalHeader";

type AddNewModalContentProps = {
  onClose: Function;
  selectedGame: IGameModel | null;
  onAdd: Function;
  onUpdate: Function;
};

export default function AddNewModalContent({
  onClose,
  selectedGame = null,
  onAdd,
  onUpdate,
}: AddNewModalContentProps) {
  const [formData, setFormData] = useState<IGameModel>({
    id: Math.floor(Math.random() * 90000) + 10000, // generate a random 5 digit id
    name: "",
    author: "",
    url: "",
    published_date: formatToDBDate(new Date()),
  });

  // Initialize the form fields in case of edit
  useEffect(() => {
    if (selectedGame) {
      setFormData(selectedGame);
    }
  }, [selectedGame]);

  function submit() {
    if (selectedGame) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }
  }
  return (
    <>
      <ModalHeader
        title={selectedGame ? "Edit Game" : "Add New Game"}
        onClose={onClose}
      />
      <form onSubmit={submit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name of your game"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="url"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Url
          </label>
          <input
            type="url"
            id="url"
            placeholder="url of your game"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            placeholder="Simple Viral Games"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50"
        >
          {selectedGame ? "Update" : "Publish"}
        </button>
      </form>
    </>
  );
}
