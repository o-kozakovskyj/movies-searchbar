import Logo from "../Logo";
import SearchBox from "../SearchBox";
import * as Styled from "./Layout.styled";

type LayoutProps = {
  children: React.ReactNode;
  aside: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children, aside }) => {
  return (
    <>
      <Styled.Header>
        <Styled.HeaderContent>
          <Logo />
          <SearchBox />
        </Styled.HeaderContent>
      </Styled.Header>
      <Styled.MainSection>
        <Styled.AsideSection>{aside}</Styled.AsideSection>
        <Styled.CenterSection>{children}</Styled.CenterSection>
      </Styled.MainSection>
    </>


  )
}
export default Layout;