import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

export const movieCard = styled(Card)`
margin: 0 auto;
display: flex;
@media (max-width: 800px) {
  flex-direction: column;
}
`;

export const movieContent = styled(CardContent)`
padding: 16px 16px 0 16px;
`;
export const SubTitles = styled(Typography)`
display: flex;
align-items: flex-start;
max-height: 180px;
overflow: auto;
font-weight: 600;
.MuiTypography-root {
  margin: 0 4px;
}
`;
export const Favorites = styled(Typography)`
display: flex;
align-items: center;

font-weight: 600;
.MuiTypography-root {
  margin: 0 4px;
}
`;