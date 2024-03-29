import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Image, { ImageProps } from 'next/image';
import Link from "next/link";

export const FavoriteListBox = styled(Box)`
display: flex;
white-space: nowrap;
flex-direction: column;
padding: 0 0 0 24px;
`;
export const movieInfo = styled(Box)`
  display: flex;
  align-items: center;
  .MuiTypography-root {
    margin: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const AsideTitle = styled(Typography)`
  font-weight: 700;
  margin-bottom: 8px;
`;
export const Poster = styled((props: ImageProps) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image width={13} height={13} {...props} />
))`
  margin-left: 4px;
`;
export const LinkAnchor = styled(Link)`
  text-decoration: none;
  color: inherit;
`