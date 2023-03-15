import { List, Typography } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

export const MoviesListBox = styled(List)`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
  align-items: center;
`;
export const NoResultText = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
`;
export const LinkAnchor = styled((props) => <Link {...props} />)`
text-decoration: none;
color: inherit;
`;
