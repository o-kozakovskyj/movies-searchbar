import { Box, ListItem, Typography } from "@mui/material";
import styled from "styled-components";

export const moviesListBox = styled(ListItem)`
  display: flex;
  overflow: hidden;
  flex-shrink: 2;
  padding: 0 20px;
  margin: 8px;
  width: 140px;
  text-decoration: none;
`;

export const ImageBox = styled(Box)`
  position: relative;
  border-radius: 10px;
  margin: 0 20px;
  flex-shrink: 0;
  text-overflow: ellipsis;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
export const Title = styled(Typography)`
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  text-decoration: none;
  margin-left: 2px;
  `;
export const Year = styled(Typography)`
  font-size: 0.6rem;
  font-weight: 600;
  text-align: left;
  margin-left: 2px;
  `;
