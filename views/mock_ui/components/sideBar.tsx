import clsx from "clsx";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Icon from "./icon";
import IconButton, { NetworkIconButton } from "./iconButton";
import MenuItem from "./menuItem";
import UserAvatar from "./userAvatar";
import { FaShoppingCart } from "react-icons/fa";

type ISidebarProps = {
  onSidebarHide: Function;
  showSidebar: boolean;
};

export default function Sidebar({ onSidebarHide, showSidebar }: ISidebarProps) {
  const [selected, setSelected] = useState("0");
  const { dashOffset, indicatorWidth, precentage } = useSpring({
    dashOffset: 26.015,
    indicatorWidth: 70,
    precentage: 77,
    from: { dashOffset: 113.113, indicatorWidth: 0, precentage: 0 },
    config: config.molasses,
  });

  const sidebarItems = [
    [
      { id: "0", title: "Dashboard", isNested: false },
      { id: "1", title: "Recipes", isNested: false },
    ],

    [
      { id: "2", title: "Blog", isNested: false },
      { id: "3", title: "Templates", isNested: false },
      { id: "31", title: "Favourites", isNested: true },
      { id: "32", title: "Custom Template", isNested: true },
      { id: "4", title: "Integrations", isNested: false },
      { id: "41", title: "Semrush", isNested: true },
    ],

    [
      { id: "5", title: "Product Roadmap", isNested: false },
      { id: "6", title: "What's New", isNested: false },
    ],
  ];

  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-white dark:bg-neutral-900 w-full sm:w-20 xl:w-60 sm:flex flex-col z-10 border-r-[1px] border-neutral-100  dark:border-neutral-700",
        showSidebar ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2">
          <IconButton icon="logo" className="w-10 h-10" onClick={() => {}} />
          <div className="block sm:hidden xl:block ml-2 ">
            <img src={`/logoText.svg`} alt="" className="h-6" />
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <NetworkIconButton
            icon="res-react-dash-sidebar-close"
            className="block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>

      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        <div className="w-full h-20 hidden sm:block flex-shrink-0">
          <div className="bg-neutral-100 dark:bg-neutral-800 w-full h-full flex items-center justify-start sm:justify-center xl:justify-start px-3 sm:px-0 xl:px-3">
            <Icon
              path="res-react-dash-sidebar-card"
              className="w-9 h-9 sm:block hidden xl:hidden"
            />
            <div className="block sm:hidden xl:block ml-2">
              <div className="text-sm dark:text-gray-50">Project</div>
              <div className="text-sm font-bold dark:text-white">
                My First Project
              </div>
            </div>
            <div className="block sm:hidden xl:block flex-grow"></div>
            <Icon
              path="res-react-dash-sidebar-card-select"
              className="block sm:hidden xl:block w-5 h-5"
            />
          </div>
        </div>

        {sidebarItems[0].map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onClick={() => setSelected(item.id)}
            selected={selected}
          />
        ))}

        <div className="border-b-[1px] p-2 m-2 border-neutral-100 dark:border-neutral-700" />

        {sidebarItems[1].map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onClick={() => setSelected(item.id)}
            selected={selected}
          />
        ))}

        <div className="flex-grow" />

        <div className="w-full hidden py-6 sm:flex bg-sky-100 dark:bg-neutral-800 flex-col rounded-t-xl">
          <div className="w-full flex items-center justify-start sm:justify-center xl:justify-start px-3 sm:px-0 xl:px-3">
            <UserAvatar />
            <div className="block sm:hidden xl:block ml-3">
              <div className="text-sm font-bold dark:text-white">
                keitikalpa.saha
              </div>
              <div className="text-sm dark:text-gray-50">
                Credits Used : 313.2
              </div>
            </div>
            <div className="block sm:hidden xl:block flex-grow"></div>
          </div>
          <button
            type="button"
            className="text-white bg-green-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center mx-2 mt-4 "
          >
            <div className="flex-grow " />
            <FaShoppingCart className="w-6 h-6 xl:w-5 xl:h-5" />
            {/* <svg
              className="w-8 h-8 xl:w-5 xl:h-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="bitcoin"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"
              ></path>
            </svg> */}
            <div className="ml-2 sm:hidden xl:flex">Change Plan</div>
            <div className="flex-grow" />
          </button>
          <div className="block sm:hidden xl:block ml-2 mt-2">
            {sidebarItems[2].map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                onClick={setSelected}
                selected={selected}
              />
            ))}
          </div>
        </div>

        <MenuItem
          key="collapse"
          item={{ id: "7", title: "Collapse", isNested: false }}
          onClick={setSelected}
          selected={selected}
        />
        <div className="h-2" />
      </div>
    </div>
  );
}
