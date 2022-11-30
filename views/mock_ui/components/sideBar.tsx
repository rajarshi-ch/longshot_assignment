import clsx from "clsx";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Icon from "./icon";
import IconButton, { NetworkIconButton } from "./iconButton";
import MenuItem from "./menuItem";

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
      { id: "0", title: "Dashboard", notifications: false },
      { id: "1", title: "Recipes", notifications: false },
    ],

    [
      { id: "4", title: "Blog", notifications: false },
      { id: "5", title: "Templates", notifications: false },
      { id: "6", title: "Integrations", notifications: false },
    ],

    [
      { id: "8", title: "Product Roadmap", notifications: false },
      { id: "9", title: "What's New", notifications: false },
    ],
  ];

  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-white dark:bg-neutral-900 w-full sm:w-20 xl:w-60 sm:flex flex-col z-10 border-r-[1px] border-neutral-100",
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
            onClick={setSelected}
            selected={selected}
          />
        ))}

        <div className="border-b-[1px] p-2 m-2 border-neutral-100 dark:border-neutral-700" />

        {sidebarItems[1].map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onClick={setSelected}
            selected={selected}
          />
        ))}

        <div className="flex-grow" />

        <div className="w-full hidden py-6 sm:flex bg-sky-100 dark:bg-neutral-800 flex-col">
          <div className="w-full flex items-center justify-start sm:justify-center xl:justify-start px-3 sm:px-0 xl:px-3">
            <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-indigo-600 rounded-full dark:bg-gray-600">
              <span className="font-medium text-white dark:text-gray-300">
                KS
              </span>
            </div>
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
          item={{ id: "7", title: "Collapse", notifications: false }}
          onClick={setSelected}
          selected={selected}
        />
        <div className="h-2" />
      </div>
    </div>
  );
}
