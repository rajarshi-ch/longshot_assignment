import HelpFab from "./helpFab";
import Icon from "./icon";
import IconButton from "./iconButton";
import { AiOutlineRight } from "react-icons/ai";

type IContentProps = {
  onSidebarHide: Function;
  toggleDarkMode: Function;
  darkMode: boolean;
};

export default function Content({
  onSidebarHide,
  toggleDarkMode,
}: IContentProps) {
  return (
    <div className="flex w-full bg-slate-50 dark:bg-neutral-800">
      <HelpFab toggleDarkMode={toggleDarkMode} />
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0" />
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <div className="w-full sm:flex p-6 px-8 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div className="w-full">
              <div className="flex items-center">
                <div>Keyword Explorer</div>
                <AiOutlineRight className="mx-2" />
                <div className="dark:text-white text-neutral-900 font-semibold">
                  Keyword Overview
                </div>
              </div>
              <div className="flex items-center mt-3">
                <div className="text-xl dark:text-white text-neutral-900 font-bold">
                  Keyword :
                </div>
                <div className="text-xl ml-2 font-bold">
                  Shopping in barcelona
                </div>
              </div>
              <div className="flex items-center dark:text-white text-neutral-900 font-semibold space-x-1">
                <div>Database: </div>
                <div> United States </div>
                <img src={`/usa.svg`} alt="" className="h-3" />
              </div>
              <div className="border-b-[1px] w-full mt-3 border-neutral-200 dark:border-neutral-700" />
            </div>
            <IconButton
              icon="res-react-dash-sidebar-open"
              className="block sm:hidden"
              onClick={() => onSidebarHide()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
