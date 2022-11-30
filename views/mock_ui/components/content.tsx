import HelpFab from "./helpFab";
import Icon from "./icon";
import IconButton from "./iconButton";
import { AiOutlineRight } from "react-icons/ai";
import { IntentBadge } from "./intentBadge";

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
              <div className="flex flex-col xl:flex-row sm:flex-col max-w-[900px] w-full xl:space-x-2 xl:space-y-0  sm:space-y-2 sm:space-x-0 space-y-2 mx-auto mt-4">
                <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg">
                  Volume
                  <div className="flex flex-row">
                    <div className="text-xl font-bold">480</div>
                    <img
                      src={`/usa.svg`}
                      alt=""
                      className="h-3 align-middle self-center ml-2"
                    />
                  </div>
                  <div className="border-b-[1px] w-full my-3 mx-3 border-neutral-200 dark:border-neutral-700" />
                  Keyword Difficulty
                  <div className="flex flex-row my-2">
                    <div className="flex-column">
                      <div className="text-xl font-bold">46 %</div>
                      <div className="text-sm">Possible</div>
                    </div>
                    <img
                      src={`/usa.svg`}
                      alt=""
                      className="h-3 align-middle self-center ml-2"
                    />
                  </div>
                  Slightly more competition. You'll need well-structured and
                  unique content appropriately optimized for your keywords.",
                </div>
                <div className="flex flex-col w-full h-100% max-h-[500px] items-stretch space-y-2">
                  <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg grow">
                    Intent
                    <IntentBadge intent={0} />
                  </div>
                  <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg grow">
                    abc
                  </div>
                  <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg grow">
                    abc
                  </div>
                </div>
              </div>
            </div>
            {/* <IconButton
              icon="res-react-dash-sidebar-open"
              className="block sm:hidden"
              onClick={() => onSidebarHide()}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
