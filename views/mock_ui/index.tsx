import type { NextPage } from "next";
import { useState } from "react";
import Content from "./components/content";
import SideBar from "./components/sideBar";

const App: NextPage = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    <div className="">
      <div className="flex dark:bg-neutral-50 dark:text-neutral-500 text-neutral-600">
        <SideBar
          showSidebar={showSidebar}
          onSidebarHide={() => onSetShowSidebar(false)}
        />
        <Content onSidebarHide={() => onSetShowSidebar(true)} />
      </div>
    </div>
  );
};

export default App;
