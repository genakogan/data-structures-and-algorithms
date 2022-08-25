// Genady Kogan
import styled from "styled-components";
import Theme from "../../models/Theme";
interface Props {
  theme: Theme;
}
const Container = styled.div<Props>`
  z-index: 3;
  position: fixed;
  top: calc(100% - 50px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.navbar.foreground};
  transition-duration: 0.5s;
 `;

export default Container;
