import Movie from "./movie";

export type MoviesList = {
  Search: Movie[];
  totalResults: string;
  Response: boolean;
};