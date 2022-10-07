import { ReactComponent as Logo } from "../../assets/images/SpaceX_logo_black.svg";
import { LogoLink, LogoThumbs, LogoText } from "./Header.styled";

const Header = () => (
  <LogoLink to={"/"}>
    <LogoThumbs>
      <Logo />
    </LogoThumbs>
    <LogoText>Dragons</LogoText>
  </LogoLink>
);

export default Header;
