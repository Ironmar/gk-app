import React, { useContext } from "react";
import { NewsContex } from "../../../context/newsContext";
import NavElement from "./NavElements";
const Navbar: React.FC = () => {
  const { news } = useContext(NewsContex)!;

  return (
    <div className="news_entries">
      <h3 style={{ color: "#3399cc", borderBottom: "1px solid #3399cc" }}>
        Noticias
      </h3>
      {news.map((el) => (
        <NavElement key={el.id} entry={el} />
      ))}
    </div>
  );
};
export default Navbar;
