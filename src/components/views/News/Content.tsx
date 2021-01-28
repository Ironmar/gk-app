import React, { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import { NewsContex } from "../../../context/newsContext";

interface IParam {
  newsId: string;
}
const Content: React.FC = () => {
  const { news } = useContext(NewsContex)!;
  const { newsId }: IParam = useParams();

  const entry = news.find((el) => el.title === newsId);

  return newsId.length > 4 ? (
    <div className="news__entry-content">
      <h2>{entry?.title}</h2>
      <p>{entry?.content}</p>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
export default Content;
