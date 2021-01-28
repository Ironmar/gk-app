import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";
import { INews } from "../constants/interface";
import { db } from "../firebase/firebaseConfig";

type NewsContextType = {
  news: INews[];
  setNews: Dispatch<SetStateAction<INews[]>>;
};

export const NewsContex = createContext<NewsContextType | undefined>(undefined);

const NewsProvider: React.FC = (props) => {
  const [news, setNews] = useState<INews[]>([]);

  const getNews = useCallback(async () => {
    const newsData: any = [];
    const docRef = await db.collection("news").get();

    docRef.forEach((el) => {
      newsData.push({ id: el.id, ...el.data() });
    });
    setNews(newsData);
  }, []);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <NewsContex.Provider value={{ news, setNews }}>
      {props.children}
    </NewsContex.Provider>
  );
};
export default NewsProvider;
