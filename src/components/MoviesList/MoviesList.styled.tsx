import { List, Typography } from "@mui/material";
import styled from "styled-components";

export const MoviesListBox = styled(List)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0;
`;
export const NoResultText = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
`;
export const LinkAnchor = styled.a`
  color: #5a5a5e;
  text-decoration: none;
  font-size: 0.8rem;
  padding:0;
  margin: 0;
  &:hover {
    text-decoration: none;
  }
`;
