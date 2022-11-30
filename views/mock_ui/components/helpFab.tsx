import { BiHelpCircle } from "react-icons/bi";
//Fab stands for Floating Action Button
export default function HelpFab() {
  return (
    <button
      title="Help"
      className="fixed z-90 bottom-10 right-8 bg-blue-600 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
    >
      <BiHelpCircle />
    </button>
  );
}
