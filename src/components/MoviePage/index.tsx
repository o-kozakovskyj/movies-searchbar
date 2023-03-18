import { useDispatch, useSelector } from "react-redux";
import FavoriteCheckbox from "../Checkboxes/FavoriteCheckbox";
import { addToFavorites, deleteFromFavorites, selectFavorites } from "../MoviePage/MovieSlice";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getmovie } from "@/gateways/gateway";
import Movie from "@/entitles/Movie";
import * as Styled from "./MoviePage.styled";
import FALLBACK_URL from "@/data/falbackUrl";

const MoviePage: React.FC = () => {
  const movieId = useRouter().query.movie as string;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [movie, setmovie] = useState<Movie>({
    Title: "",
    Year: "",
    imdbID: "",
    Poster: "",
    Actors: "",
    Plot: "",
    Ratings: [],
    Awards: "",
  });
  const [src, setSrc] = useState(FALLBACK_URL);
  const favoriteList = useSelector(selectFavorites);
  const handleImageError = () => {
    setSrc(FALLBACK_URL);
  };
  useEffect(() => {
    if (movieId) {
      getmovie(movieId).then((res) => {
        setmovie(res);
        setSrc(movie.Poster);
      });
    }
    if (favoriteList.find((movie: Movie) => movie.imdbID === movieId)) {
      setIsFavorite(true);
    }
  }, [movieId, movie, isFavorite, favoriteList, movie.Poster]);
  const dispatch = useDispatch();
  const handleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(deleteFromFavorites(movie.imdbID));
    } else {
      setIsFavorite(true);
      dispatch(addToFavorites(movie));
    }
  }; 
  return (
    <Styled.movieCard>
      <Styled.PosterBox>
        <Image
        fill
        alt={movie.Title}
        onErrorCapture={handleImageError}
        src={src === "N/A" ? FALLBACK_URL : src}
      />
      </Styled.PosterBox>
      <Styled.MovieContent>
        <Styled.MovieTitle>{movie.Title}</Styled.MovieTitle>
        <Styled.Title>
          Year:
          <Styled.SubTitle>{movie.Year}</Styled.SubTitle>
        </Styled.Title>
        <Styled.Title>
          Actors:
          <Styled.SubTitle>{movie.Actors}</Styled.SubTitle>
        </Styled.Title>
        <Styled.Title>
          Awards:
          <Styled.SubTitle>{movie.Awards === 'N/A' ? "-" : movie.Awards }</Styled.SubTitle>
        </Styled.Title>
        <Styled.Title>
          Plot:
          <Styled.SubTitle>{movie.Plot === "N/A" ? "-" : movie.Plot}</Styled.SubTitle>
        </Styled.Title>
        <Styled.Title> Ratings:
          <Styled.SubTitle >
            {movie.Ratings.map((rating) => {
              return (
                <Styled.SubTitle key={rating.Source}>
                  {rating.Source}: <Styled.Ratings>{rating.Value}</Styled.Ratings>
                </Styled.SubTitle>
              );
            })}
          </Styled.SubTitle>
        </Styled.Title>
        <Styled.Favorites>
          Favorites:
          <FavoriteCheckbox
            onClick={handleFavorite}
            checked={isFavorite}
          />
        </Styled.Favorites>
      </Styled.MovieContent>
    </Styled.movieCard>
  );
}
export default MoviePage;