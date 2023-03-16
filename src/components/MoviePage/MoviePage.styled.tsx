import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const movieCard = styled(Paper)`
margin: 0 auto;
width: 180px;
@media (min-width: 375px) {
  width: 200px;
}
@media (min-width: 425px) {
  width: 240px;
}
@media (min-width: 768px) { 
  display: flex;
  width: 100%;
}
`;
export const PosterBox = styled(Box)`
width: 180px;
height: 240px;
flex-shrink: 0;
position: relative;
overflow: hidden;
@media (min-width: 375px) {
  width: 200px;
  height: 300px;
}
@media (min-width: 425px) {
  width: 240px;
  height: 360px;
}
@media (min-width: 768px) {
  width: 300px;
  height: 450px;
}
@media (min-width: 1024px) {
  width: 400px;
  height: 600px;
}
`

export const MovieContent = styled(Box)`
display: flex;
flex-direction: column;
padding-top: 8px;
font-size: 10px;
@media (min-width: 768px) {
  padding: 0 0 0 16px;
  font-size: 14px;
}
`;
export const MovieTitle = styled(Typography)`
font-size: 1.5em;
font-weight: 600;
text-align: left;
text-decoration: none;
`;
export const Title = styled(Typography)`
font-weight: 600;
text-align: left;
text-decoration: none;
font-size: inherit;
`;

export const SubTitle = styled(Typography)`
display: inline-block;
margin: 0 4px;
font-size: inherit;
`; 
export const Ratings = styled(Typography)`
display: inline-block;
margin: 0 4px;
color:#FFBF00;
font-size: inherit;
`;
export const Favorites = styled(Typography)`
display: flex;
align-items: center;
font-weight: 600;
font-size: inherit;
`;