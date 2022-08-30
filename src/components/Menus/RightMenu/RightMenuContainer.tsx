// Genady Kogan
import styled from "styled-components";
import Theme from "../../../models/Theme";


interface Props {
  theme: Theme;
}

const LeftMenuContainer = styled.div<Props>`
  position: fixed;
  //position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 50px;
  z-index: 2;
  background-color: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.navbar.foreground};
  overflow-x: hidden;
  transition-duration: 0.3s;
  transition-property: background-color, left;
`;

export default LeftMenuContainer;
