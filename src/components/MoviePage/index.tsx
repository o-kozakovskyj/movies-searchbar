import { useDispatch, useSelector } from "react-redux";
import FavoriteCheckbox from "../Checkboxes/FavoriteCheckbox";
import { addToFavorites, deleteFromFavorites, selectFavorites } from "../MoviePage/MovieSlice";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getmovie } from "@/gateways/gateway";
import Movie from "@/entitles/Movie";
import * as Styled from "./MoviePage.styled";

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
  const favoriteList = useSelector(selectFavorites);
  useEffect(() => {
    if (movieId) {
      getmovie(movieId).then((res) => {
        setmovie(res);
      });
    }
    if (favoriteList.find((movie: Movie) => movie.imdbID === movieId)) {
      setIsFavorite(true);
    }
  }, [movieId, movie, isFavorite, favoriteList]);
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
  const handleImageError = (e: any) => {
    e.target.src = "https://via.placeholder.com/100x200?text=NO+Poster+Found";
  };
  return (
    <Styled.movieCard>
      <Image
        width={160}
        height={280}
        alt={movie.Title}
        onError={handleImageError}
        src={movie.Poster === "N/A" ? "https://via.placeholder.com/100x200?text=NO+Poster+Found" : movie.Poster}
      />
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