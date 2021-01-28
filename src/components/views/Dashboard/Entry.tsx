import React from "react";
import { Link } from "react-router-dom";
import { INews } from "../../../constants/interface";

type Props = {
  entry: INews;
};

const Entry: React.FC<Props> = ({ entry }) => {
  const { title } = entry;
  return (
    <Link to={`/news/${title}`}>
      <div className="sidebar__cards">
        <h4>{title}</h4>
      </div>
    </Link>
  );
};
export default Entry;
