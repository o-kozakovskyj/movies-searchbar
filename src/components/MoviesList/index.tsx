import { getmovies } from "@/gateways/gateway";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Movie from "@/entitles/Movie";
import MovieInList from "../MovieInList";
import * as Styled from "./MoviesList.styled";

const MoviesList: React.FC = () => {
  const search = useRouter().query.search as string;
  const [list, setList] = useState<Movie[]>([]);
  useEffect(() => {
    if (search) {
      getmovies(search).then((res) => {
        setList(res.Search);
      })
    }
  }, [search])
  if (!search || !list) {
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
            <Link
              href={`/${search}/${movie.imdbID}`}
              passHref
              legacyBehavior
            >
              <Styled.LinkAnchor>
                <MovieInList movie={movie} key={movie.imdbID} />
              </Styled.LinkAnchor>
            </Link>
          </Box>
        )
      })}
    </Styled.MoviesListBox>
  )
}
export default MoviesList;

