import clsx from "clsx";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Icon from "./icon";
import IconButton from "./iconButton";
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
  ];

  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 dark:bg-neutral-900 w-full sm:w-20 xl:w-60 sm:flex flex-col z-10",
        showSidebar ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2">
          <IconButton
            icon="res-react-dash-logo"
            className="w-10 h-10"
            onClick={() => {}}
          />
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">
            React
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <IconButton
            icon="res-react-dash-sidebar-close"
            className="block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>

      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        <div className="w-full p-0 h-24 sm:h-20 xl:h-24 hidden sm:block flex-shrink-0">
          <div className="bg-sidebar-card-top w-full h-full flex items-center justify-start sm:justify-center xl:justify-start px-3 sm:px-0 xl:px-3">
            <Icon path="res-react-dash-sidebar-card" className="w-9 h-9 " />
            <div className="block sm:hidden xl:block ml-3">
              <div className="text-sm font-bold text-white">Sales House</div>
              <div className="text-sm text-gray-50">General Item</div>
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

        <div className="sidebar-separator-top p-2 m-2" />

        {sidebarItems[1].map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onClick={setSelected}
            selected={selected}
          />
        ))}

        <div className="flex-grow" />

        <div className="w-full p-0 h-24 sm:h-20 xl:h-24 hidden sm:block flex-shrink-0">
          <div className="bg-sky-100 dark:bg-neutral-800 w-full h-full flex items-center justify-start sm:justify-center xl:justify-start px-3 sm:px-0 xl:px-3">
            <Icon path="res-react-dash-sidebar-card" className="w-9 h-9 " />
            <div className="block sm:hidden xl:block ml-3">
              <div className="text-sm font-bold text-white">Sales House</div>
              <div className="text-sm text-gray-50">General Item</div>
            </div>
            <div className="block sm:hidden xl:block flex-grow"></div>
            <Icon
              path="res-react-dash-sidebar-card-select"
              className="block sm:hidden xl:block w-5 h-5"
            />
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
