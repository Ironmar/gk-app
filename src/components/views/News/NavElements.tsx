import React from "react";
import { Link } from "react-router-dom";
import { INew } from "../../../hooks/useForm";

type Props = {
  entry: INew;
};

const NavElement: React.FC<Props> = ({ entry }) => {
  return (
    <Link className="active" to={`/news/${entry.title}`}>
      <div className="nav-text">{entry.title}</div>
    </Link>
  );
};
export default NavElement;
