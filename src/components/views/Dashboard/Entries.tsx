import React, { useContext, useEffect } from "react";
import { NewsContex } from "../../../context/newsContext";
import Entry from "./Entry";

const Entries: React.FC = () => {
  const { news } = useContext(NewsContex)!;
  return (
    <div className="sidebar__container">
      {news.map((el) => (
        <Entry key={el.id} entry={el} />
      ))}
    </div>
  );
};
export default Entries;
