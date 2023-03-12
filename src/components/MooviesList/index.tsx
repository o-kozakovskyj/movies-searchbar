import { Box } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import type Moovie from "../../entitles/Moovie";
import { getMoovies } from "../../gateways/gateway";
import MoovieInList from "../MoovieInList";
import * as Styled from "./MooviesList.styled";

const MoovieList: React.FC = () => {
  const search = useRouter().query.search as string;
  const [list, setList] = useState<Moovie[]>([]);
  useEffect(() => {
    if (search) {
      getMoovies(search).then((res) => {
        setList(res.Search);
      })
    }
  }, [search])
  if (!search || !list) {
    return (
      <Styled.NoResultText variant="h4">
        No Results Found
      </Styled.NoResultText>
    )
  };
  return (
    <Styled.MooviesListBox>
      {list.map((moovie: Moovie) => {
        return (
          <Box key={moovie.imdbID}>
            <Link href={`/${search}/${moovie.imdbID}`} >
              <Styled.LinkAnchor>
                <MoovieInList moovie={moovie} key={moovie.imdbID} />
              </Styled.LinkAnchor>
            </Link>
          </Box>


        )
      })}
    </Styled.MooviesListBox>
  )
}
export default MoovieList;