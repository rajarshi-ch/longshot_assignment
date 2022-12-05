type ModalHeaderProps = {
  title: string;
  onClose: Function;
};

export default function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => onClose()}
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="w-full h-[1px] mt-4 mb-6 bg-gray-300"></div>
    </div>
  );
}
