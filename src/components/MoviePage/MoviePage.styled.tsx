import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const movieCard = styled(Paper)`
display: flex;
margin: 0 20px;
@media (max-width: 800px) {
  flex-direction: column;
}
`;

export const MovieContent = styled(Box)`
padding: 16px 16px 0 16px;
`;
export const MovieTitle = styled(Typography)`
font-size: 1.5rem;
font-weight: 600;
text-align: left;
text-decoration: none;
`;
export const Title = styled(Typography)`

font-weight: 600;
text-align: left;
text-decoration: none;
`;
export const SubTitles = styled(Typography)`
display: flex;
align-items: flex-start;

font-weight: 600;
`;
export const SubTitle = styled(Typography)`
display: inline-block;
margin: 0 4px;
`; 
export const Ratings = styled(Typography)`
display: inline-block;
margin: 0 4px;
color:#FFBF00;
`;
export const Favorites = styled(Typography)`
display: flex;
align-items: center;
font-weight: 600;
`;