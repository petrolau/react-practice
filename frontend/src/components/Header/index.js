import { StyledBody } from "../styles";
import { StyledNav, StyledList, StyledItem, StyledImage } from "./styles";
const Header = () => {
  return (
    <StyledBody>
      <header>
        <StyledNav>
          <StyledImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="React"
          />
          <StyledList>
            <StyledItem>Pricing</StyledItem>
            <StyledItem>About</StyledItem>
            <StyledItem>Contact</StyledItem>
          </StyledList>
        </StyledNav>
      </header>
    </StyledBody>
  );
};

export default Header;
