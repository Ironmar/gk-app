import { INews } from "../constants/interface";
import { db } from "../firebase/firebaseConfig";

export const getNews = async () => {
  const newsData: any = [];
  const docRef = await db.collection("news").get();

  docRef.forEach((el) => {
    newsData.push(el.id);
  });
  return newsData;
};

export const addNew = async (entry: INews) => {
  await db.collection("news").add(entry);
};
