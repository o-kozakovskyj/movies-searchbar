import Movie from "./Movie";

export type MoviesList = {
  Search: Movie[];
  totalResults: string;
  Response: boolean;
};