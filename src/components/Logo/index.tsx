import { LiveTv } from "@mui/icons-material";
import * as Styled from "./Logo.Styled";

const Logo = () => {
  return (
    <Styled.LogoBox>
      <LiveTv />
      <Styled.LogoTv>movie</Styled.LogoTv>
      <Styled.LogoTube>Tube</Styled.LogoTube>
    </Styled.LogoBox>
  )
};
export default Logo;