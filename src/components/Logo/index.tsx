import { LiveTv } from "@mui/icons-material";
import Image from "next/image";
import * as Styled from "./Logo.Styled";

const Logo = () => {
  return (
    <Styled.LogoBox>
      <Image src='/static/icon-film.png' width={20} height={20} alt='Film logo' />
      <Styled.LogoTv>
        movie
      </Styled.LogoTv>
      <Styled.LogoTube>
        Tube
      </Styled.LogoTube>
    </Styled.LogoBox>
  )
};
export default Logo;