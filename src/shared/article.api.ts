// import { IArticle } from './types/IArticle';
import axios from 'axios';
import { IArticle } from '../components/article/types/IArticle';

export const getArticles = async () : Promise<number[]> => {
  const response = await axios.get(
    'https://hacker-news.firebaseio.com/v0/newstories.json'
  );

  return response.data;
}

export const getArticle = async (id: string): Promise<IArticle> => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  return response.data;
};
