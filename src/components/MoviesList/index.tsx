import { Box } from "@mui/material";
import Movie from "@/entitles/Movie";
import MovieInList from "../MovieInList";
import * as Styled from "./MoviesList.styled";

type MoviesListProps = {
  list: Movie[];
  search: string;
}
const MoviesList: React.FC<MoviesListProps> = ({list, search}) => {
 
  if (!list) {
    return (
      <Styled.NoResultText variant="h4">
        No Results Found
      </Styled.NoResultText>
    )
  };
  return (
    <Styled.MoviesListBox>
      {list.map((movie: Movie) => {
        return (
          <Box key={movie.imdbID}>
            <Styled.LinkAnchor href={`/${search}/${movie.imdbID}`}>
              <MovieInList movie={movie} key={movie.imdbID} />
            </Styled.LinkAnchor>
          </Box>
        )
      })}
    </Styled.MoviesListBox>
  )
}
export default MoviesList;

