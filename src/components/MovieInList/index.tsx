import Image from "next/image";
import Movie from "@/entitles/Movie";
import { useState } from "react";
import FALLBACK_URL from "@/data/falbackUrl";
import * as Styled from "./MovieInList.styled";

type MovieProps = {
  movie: Movie
}
const MovieInList: React.FC<MovieProps> = ({ movie }) => {
  const handleImageError = () => {
    setSrc(FALLBACK_URL);
  };
  const [src, setSrc] = useState(movie.Poster);
  return (
    <Styled.moviesListBox>
      <Styled.ImageBox >
        <Image
          src={src === 'N/A' ? FALLBACK_URL : src}
          alt={movie.Title}
          onError={handleImageError}
          width={100}
          height={150}
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