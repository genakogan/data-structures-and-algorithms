// Genady Kogan
import styled from "styled-components";
import Theme from "../../../models/Theme";

interface Props {
  theme: Theme;
}

const TopMenuContainer = styled.div<Props>`
  z-index: 3;
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.navbar.foreground};
  transition-duration: 0.5s;
  transition-property: background-color;
  @media (max-width: 550px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height: 90px;
  }
`;

export default TopMenuContainer;
