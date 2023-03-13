import axios from "axios";
import type { MoviesList } from "../entitles/MoviesList";
import type movie from "../entitles/Movie";

export const getmovies = async (search: string): Promise<MoviesList> => {
  const response = await axios.get(
    `${process.env.API_URL}${process.env.API_KEY}&s=${search}`
  );
  return response.data;
};
export const getmovie = async (id: string): Promise<movie> => {
  const response = await axios.get(
    `${process.env.API_URL}${process.env.API_KEY}&i=${id}&plot=full`
  );
  return response.data;
}