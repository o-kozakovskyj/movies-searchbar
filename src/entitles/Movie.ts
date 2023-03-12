type Rating = {
  Source: string,
  Value: string,
}
type Movie = {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
  Actors: string;
  Awards: string;
  Plot: string;
  Ratings: Rating[];
};
export default Movie;