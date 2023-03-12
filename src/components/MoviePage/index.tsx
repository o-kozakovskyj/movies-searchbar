import { CardMedia, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getmovie } from "../../gateways/gateway";
import FavoriteCheckbox from "../Checkboxes/FavoriteCheckbox";
import { addToFavorites, deleteFromFavorites, selectFavorites } from "../MoviePage/MovieSlice";
import type movie from "../../entitles/Movie";
import * as Styled from "./MoviePage.styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MoviePage: React.FC = () => {
  const movieId = useRouter().query.movie as string;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [movie, setmovie] = useState<movie>({
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
    if (favoriteList.find((movie: movie) => movie.imdbID === movieId)) {
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
  return (
    <Styled.movieCard>
      <CardMedia
        component="img"
        max-height="442"
        image={movie.Poster}
        alt={movie.Title}
      />
      <Styled.movieContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Styled.SubTitles>
          Year:
          <Typography>
            {movie.Year}
          </Typography>
        </Styled.SubTitles>
        <Styled.SubTitles>
          Actors:
          <Typography>
            {movie.Actors}
          </Typography>
        </Styled.SubTitles>
        <Styled.SubTitles>
          Awards:
          <Typography>
            {movie.Awards}
          </Typography>
        </Styled.SubTitles>

        <Styled.SubTitles>
          Plot:
          <Typography>
            {movie.Plot}
          </Typography>
        </Styled.SubTitles>
        <Styled.SubTitles>
          Ratings:
          <Typography color="warn">
            {movie.Ratings.map((rating) => {
              return (
                <Typography key={rating.Source}>
                  {rating.Source}: {rating.Value}
                </Typography>
              );
            })}
          </Typography>
        </Styled.SubTitles>
        <Styled.Favorites>
          Favorites:
          <FavoriteCheckbox onClick={handleFavorite} checked={isFavorite} />
        </Styled.Favorites>
      </Styled.movieContent>
    </Styled.movieCard>
  );
}
export default MoviePage;