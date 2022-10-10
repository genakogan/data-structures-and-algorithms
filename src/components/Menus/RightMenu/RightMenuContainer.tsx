// Genady Kogan
import styled from "styled-components";
import Theme from "../../../models/Theme";

interface Props {
  theme: Theme;
}

const LeftMenuContainer = styled.div<Props>`
  z-index: 2;
  position: fixed;
  display: flex;
  height: 100%;
  width: 50px;
  right: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  color: ${(props) => props.theme.navbar.foreground};
  overflow-x: hidden;
  transition-duration: 0.5s;
  transition-property: background-color, left;
`;

export default LeftMenuContainer;
