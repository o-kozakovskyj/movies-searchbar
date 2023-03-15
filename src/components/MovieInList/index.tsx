import Image from "next/image";
import Movie from "@/entitles/Movie";
import * as Styled from "./MovieInList.styled";
import { useState } from "react";

type MovieProps = {
  movie: Movie
}
const MovieInList: React.FC<MovieProps> = ({ movie }) => {
  const handleImageError = () => {
    setSrc("https://via.placeholder.com/300x500?text=NO+Poster+Found");
  };
  const [src, setSrc] = useState(movie.Poster);
  return (
    <Styled.moviesListBox>
      <Styled.ImageBox >
        <Image
          src={src === 'N/A' ? 'https://via.placeholder.com/300x500?text=NO+Poster+Found' : src}
          alt={movie.Title}
          onError={handleImageError}
          width={100}
          height={180}
          priority
        />
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