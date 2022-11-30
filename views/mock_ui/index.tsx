import type { NextPage } from "next";
import { useState } from "react";
import Content from "./components/content";
import SideBar from "./components/sideBar";

const App: NextPage = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    <div className="flex dark">
      <SideBar
        showSidebar={showSidebar}
        onSidebarHide={() => onSetShowSidebar(false)}
      />
      <Content onSidebarHide={() => onSetShowSidebar(true)} />
    </div>
  );
};

export default App;
