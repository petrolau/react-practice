import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #21222a;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

export const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  color: white;
  font-weight: bold;
  color: #61dafb;
  font-size: 22px;
`;

export const StyledItem = styled.li`
  padding: 1rem;
  margin-right: 0.5rem;
  color: white;
  display: inline;
  white-space: nowrap;
  font-weight: bold;
  margin-right: 2rem;
`;

export const StyledImage = styled.img`
  width: 5%;
  object-fit: contain;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
`;
