import { BiHelpCircle } from "react-icons/bi";
import { CgDarkMode } from "react-icons/cg";
//Fab stands for Floating Action
export default function HelpFab({ toggleDarkMode, darkMode }: any) {
  return (
    <div className="fixed z-90 bottom-10 right-8 ">
      <button
        title="Light/Dark Mode"
        onClick={() => toggleDarkMode()}
        className=" bg-neutral-400 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white dark:text-neutral-900 text-4xl hover:bg-neutral-700 hover:drop-shadow-2xl mb-2"
      >
        <CgDarkMode />
      </button>
      <button
        title="Help"
        className=" bg-blue-600 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl"
      >
        <BiHelpCircle />
      </button>
    </div>
  );
}
