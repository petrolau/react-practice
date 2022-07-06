import { StyledBody } from "../styles";
import {
  StyledNav,
  StyledList,
  StyledItem,
  StyledImage,
  StyledSpan,
  StyledDiv,
} from "./styles";
const Header = () => {
  return (
    <StyledBody>
      <header>
        <StyledNav>
          <StyledDiv>
            <StyledImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="React"
            />
            <StyledSpan>React</StyledSpan>
          </StyledDiv>

          <StyledList>
            <StyledItem>React Course - Project 1</StyledItem>
          </StyledList>
        </StyledNav>
      </header>
    </StyledBody>
  );
};

export default Header;
