import { Skeleton, Typography } from "@mui/material";
import type Moovie from "../../entitles/Moovie";
import Image from "next/image";
import * as Styled from "./MoovieInList.styled";

type MoovieProps = {
  moovie: Moovie
}
const MoovieInList: React.FC<MoovieProps> = ({ moovie }) => {
  const noPoster = <>
    <Skeleton variant="rectangular" width="100px" height="60px" />
    <Typography variant="h6">
      No Poster
    </Typography>
    <Skeleton variant="rectangular" width="100px" height="60px" />
  </>
  const poster = moovie.Poster === "N/A"
    ? noPoster
    : <Image src={moovie.Poster} alt={moovie.Title} height={150} width={100} />

  return (
    <Styled.MooviesListBox>
      <Styled.ImageBox>
        {poster}
        <Styled.Title>
          {moovie.Actors}
        </Styled.Title>
        <Styled.Title>
          {moovie.Title}
        </Styled.Title>
        <Styled.Year>
          {moovie.Year}
        </Styled.Year>
      </Styled.ImageBox>
    </Styled.MooviesListBox>
  )
}
export default MoovieInList;