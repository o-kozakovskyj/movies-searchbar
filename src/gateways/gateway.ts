import axios from "axios";
import type { MoviesList } from "../entitles/MoviesList";
import type movie from "../entitles/movie";

const KEY = "d31d01b9";
const URL = "http://www.omdbapi.com/?apikey=";
export const getmovies = async (search: string): Promise<MoviesList> => {
  const response = await axios.get(
    `${URL}${KEY}&s=${search}`
  );
  return response.data;
};
export const getmovie = async (id: string): Promise<movie> => {
  const response = await axios.get(
    `${URL}${KEY}&i=${id}&plot=full`
  );
  return response.data;
}