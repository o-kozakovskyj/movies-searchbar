import { Search } from "@mui/icons-material";
import { TextField, Box, Button } from "@mui/material";
import styled from "styled-components";

const HeaderButton = styled(Button)`
  background-color: #fff;
  color: #000;
  min-width: auto;
  padding: 2px;

  &:hover {
    background-color: #808080;
  }
`;
const HeaderIconButton = styled(HeaderButton)`
  padding: 15px;
  
`;
export const SearchButton = styled(props => (
  <HeaderIconButton {...props}>
    <Search/>
  </HeaderIconButton>
))`
border: 1px solid #808080;
border-radius: 0 20px 20px 0;
`;
export const SearchInput = styled(props => <TextField
  {...props}
  variant="outlined"
  label="Search"
/>)`
  flex-grow: 1;
  fieldset {
    border: 1px solid #808080;
    border-radius: 20px 0 0 20px;
  }
`;
export const SearchBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;