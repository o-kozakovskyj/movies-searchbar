import { Divider, Link, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectFavorites } from "../MooviePage/MoovieSlice";
import type Moovie from "../../entitles/Moovie";
import * as Styled from "./FavoriteList.styled";

const FavoriteList: React.FC = () => {
  const favoriteList = useSelector(selectFavorites);

  return (
    <Styled.FavoriteListBox>
      <Styled.AsideTitle>
        My Favorite List
      </Styled.AsideTitle>
      <Divider />
      {favoriteList.map((moovie: Moovie) => {
        return (
          <Link
            href={`/${moovie.Title}/${moovie.imdbID}`}
            key={moovie.imdbID}
          >
            <Styled.LinkAnchor>
              <Styled.MoovieInfo >
                <Styled.Poster
                  src={moovie.Poster}
                  alt={moovie.Title}
                />
                <Typography>
                  {moovie.Title}
                </Typography>
              </Styled.MoovieInfo>
            </Styled.LinkAnchor>
          </Link>
        )
      })}

    </Styled.FavoriteListBox>
  )
}
export default FavoriteList;