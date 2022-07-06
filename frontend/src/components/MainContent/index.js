import { StyledBody } from "../styles";
import { StyledUl, StyledLi, StyledH1 } from "./styles";

const MainContent = () => {
  return (
    <StyledBody>
      <StyledH1>Fun facts about React</StyledH1>

      <StyledUl>
        <StyledLi>Was first released in 2013</StyledLi>
        <StyledLi>Was originally created by Jordan Walke</StyledLi>
        <StyledLi>Has well over 100K stars on GitHub</StyledLi>
        <StyledLi>Is maintained by Facebook</StyledLi>
        <StyledLi>
          Powers thousands of enterprise apps, including mobile apps
        </StyledLi>
      </StyledUl>
    </StyledBody>
  );
};

export default MainContent;
