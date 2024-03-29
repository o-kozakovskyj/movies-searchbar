import { useState } from "react";
import * as Styled  from "./SearchBox.styled";

const SearchBox: React.FC = () => {
  const [search, setSearch] = useState("");
  const handleSearchRedirect = () => {
    window.location.replace(`/${search}`);
    setSearch("");
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchRedirect();
    }
  }
  return (
    <Styled.SearchBox >
      <Styled.SearchInput
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Styled.SearchButton  onClick={handleSearchRedirect}/>
    </Styled.SearchBox>
  )
}
export default SearchBox;