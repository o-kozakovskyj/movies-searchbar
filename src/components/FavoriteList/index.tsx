import FALLBACK_URL from "@/data/falbackUrl";
import Movie from "@/entitles/Movie";
import { Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectFavorites } from "../MoviePage/MovieSlice";
import * as Styled from "./FavoriteList.styled";

const FavoriteList: React.FC = () => {
  const favoriteList = useSelector(selectFavorites);
  return (
    <Styled.FavoriteListBox>
      <Styled.AsideTitle>
        My Favorite List
      </Styled.AsideTitle>
      <Divider />
      {favoriteList.map((movie: Movie) => {
        return (
          <Styled.LinkAnchor
            href={`/${movie.Title}/${movie.imdbID}`}
            key={movie.imdbID}
          >
            <Styled.movieInfo >
              <Styled.Poster
                src={movie.Poster === "N/A" ? FALLBACK_URL : movie.Poster}
                alt={movie.Title}
              />
              <Typography>
                {movie.Title}
              </Typography>
            </Styled.movieInfo>
          </Styled.LinkAnchor>
        )
      })}
    </Styled.FavoriteListBox>
  )
}
export default FavoriteList;