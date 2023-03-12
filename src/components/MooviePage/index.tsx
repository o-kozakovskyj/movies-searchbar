import { Card, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMoovie } from "../../gateways/gateway";
import FavoriteCheckbox from "../Checkboxes/FavoriteCheckbox";
import { addToFavorites, deleteFromFavorites, selectFavorites } from "./MoovieSlice";
import type Moovie from "../../entitles/Moovie";
import * as Styled from "./MooviePage.styled";

const MooviePage: React.FC = () => {
  const moovieId = useRouter().query.moovie as string;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [moovie, setMoovie] = useState<Moovie>({
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
    if (moovieId) {
      getMoovie(moovieId).then((res) => {
        setMoovie(res);
      });
    }
    if(favoriteList.find((moovie: Moovie) => moovie.imdbID === moovieId)) {
      setIsFavorite(true);
    }
  }, [moovieId, moovie, isFavorite, favoriteList]);
  const dispatch = useDispatch();
  const handleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(deleteFromFavorites(moovie.imdbID));
    } else {
      setIsFavorite(true);
      dispatch(addToFavorites(moovie));
    }
  };
  return (
    <Styled.MoovieCard>
      <CardMedia
        component="img"
        max-height="442"
        image={moovie.Poster}
        alt={moovie.Title}
      />
      <Styled.MoovieContent>
        <Typography gutterBottom variant="h5" component="div">
          {moovie.Title}
        </Typography>
        <Styled.SubTitles>
          Year:
          <Typography>
            {moovie.Year}
          </Typography>
        </Styled.SubTitles>
        <Styled.SubTitles>
          Actors:
          <Typography>
            {moovie.Actors}
          </Typography>
        </Styled.SubTitles>
        <Styled.SubTitles>
          Awards:
          <Typography>
            {moovie.Awards}
          </Typography>
        </Styled.SubTitles>

        <Styled.SubTitles>
          Plot:
          <Typography>
            {moovie.Plot}
          </Typography>
        </Styled.SubTitles>
        <Styled.SubTitles>
          Ratings:
          <Typography color="warn">
            {moovie.Ratings.map((rating) => {
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
          <FavoriteCheckbox onClick={handleFavorite} checked={isFavorite } />
        </Styled.Favorites>
      </Styled.MoovieContent>
    </Styled.MoovieCard>
  );
}
export default MooviePage;