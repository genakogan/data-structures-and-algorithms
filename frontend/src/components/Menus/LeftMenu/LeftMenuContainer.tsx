// Genady Kogan
import styled from "styled-components";
import Theme from "../../../models/Theme";

interface Props {
  theme: Theme;
}

const LeftMenuContainer = styled.div<Props>`
  z-index: 3;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 50px;
  
  background-color: transparent;
  color: ${(props) => props.theme.navbar.foreground};
  overflow-x: hidden;
  transition-duration: 0.5s;
  transition-property: background-color, left;
 
`;

export default LeftMenuContainer;
