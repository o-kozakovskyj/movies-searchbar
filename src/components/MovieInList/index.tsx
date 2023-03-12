import { Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import Movie from "../../entitles/Movie";
import * as Styled from "./MovieInList.styled";

type MovieProps = {
  movie: Movie
}
const MovieInList: React.FC<MovieProps> = ({ movie }) => {
  const noPoster = <>
    <Skeleton variant="rectangular" width="100px" height="60px" />
    <Typography variant="h6">
      No Poster
    </Typography>
    <Skeleton variant="rectangular" width="100px" height="60px" />
  </>
  const poster = movie.Poster === "N/A"
    ? noPoster
    : <Image src={movie.Poster} alt={movie.Title} height={150} width={100} />

  return (
    <Styled.moviesListBox>
      <Styled.ImageBox>
        {poster}
        <Styled.Title>
          {movie.Actors}
        </Styled.Title>
        <Styled.Title>
          {movie.Title}
        </Styled.Title>
        <Styled.Year>
          {movie.Year}
        </Styled.Year>
      </Styled.ImageBox>
    </Styled.moviesListBox>
  )
}
export default MovieInList;