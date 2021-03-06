import React from "react";
import { Link } from "react-router-dom";
import Content from "./Content";
import Navbar from "./Navbar";
const NewsScreen: React.FC = () => {
  return (
    <div className="news__main .fade_in">
      <header className="news__header">
        <img
          src="https://mk0gkcity5058p9mp0g.kinstacdn.com/wp-content/uploads/2017/01/GK-logo-normal.png"
          alt="gk-logo"
        />
        <Link to="/" className="news__return">
          Regresar
        </Link>
      </header>
      <div className="news__content-container">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};
export default NewsScreen;
