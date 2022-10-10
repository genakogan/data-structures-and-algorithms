// Genady Kogan
import styled from "styled-components";
import Theme from "../../../models/Theme";
interface Props {
  theme: Theme;
}
const BottomMenuContainer = styled.div<Props>`
  z-index: 2;
  position: fixed;
  top: calc(100% - 50px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: transparent;
  color: ${(props) => props.theme.navbar.foreground};
  transition-duration: 0.5s;
  user-select: none;
  
`;

export default BottomMenuContainer;
