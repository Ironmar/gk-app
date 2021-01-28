import React from "react";
import Entries from "./Entries";
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar__main">
      <div className="appBar">
        <h3>Gk | Entradas</h3>
      </div>
      <Entries />
    </div>
  );
};
export default Sidebar;
