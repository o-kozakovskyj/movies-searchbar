import axios from "axios";
import type { MooviesList } from "../entitles/MooviesList";
import type Moovie from "../entitles/Moovie";

const KEY = "d31d01b9";
const URL = "http://www.omdbapi.com/?apikey=";
export const getMoovies = async (search: string):Promise<MooviesList> => {
  const response = await axios.get(
    `${URL}${KEY}&s=${search}`
  );
  return response.data;
};
export const getMoovie = async (id: string): Promise<Moovie> => {
  const response = await axios.get(
    `${URL}${KEY}&i=${id}&plot=full` 
  );
  return response.data;
}