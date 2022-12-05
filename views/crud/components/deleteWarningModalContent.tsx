import ModalHeader from "./modalHeader";

type DeletemodalProps = {
  onClose: Function;
  onDelete: Function;
};

export default function DeleteWarningModalContent({
  onClose,
  onDelete,
}: DeletemodalProps) {
  return (
    <>
      <ModalHeader title="Delete Game ?" onClose={onClose} />

      <div
        className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Danger alert!</span> You are about to
          delete <span className="font-medium">Game Name</span>! This process is
          irreversible.
        </div>
      </div>
      <div className="w-full flex md:justify-end justify-center">
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Delete
        </button>
      </div>
    </>
  );
}
