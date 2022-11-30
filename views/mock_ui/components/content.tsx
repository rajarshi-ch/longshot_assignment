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
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div>
              <div className="flex items-center">
                <div>Keyword Explorer</div>
                <AiOutlineRight className="mx-2" />
                <div className="dark:text-white text-neutral-900 font-semibold">
                  Keyword Overview
                </div>
                {/* <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
                  <Icon
                    path="res-react-dash-premium-star"
                    className="w-8 h-8"
                  />
                  <div className="ml-2 font-bold text-premium-yellow">
                    PREMIUM
                  </div>
                </div> */}
              </div>
              <div className="flex items-center">
                <Icon
                  path="res-react-dash-date-indicator"
                  className="w-3 h-3"
                />
                <div className="ml-2">October 26</div>
              </div>
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
