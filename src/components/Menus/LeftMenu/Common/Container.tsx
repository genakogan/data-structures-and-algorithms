import styled from "styled-components";

interface Props {
  isVisible: boolean;
 
}

const Container = styled.div<Props>`
  z-index: 2;
  position: fixed;
  height: 100%;
  width: 300px;
  left: ${(props) => (props.isVisible ? 0 : "-300px")};
  background-color: ${(props) => props.theme.sidebar.background};
 
  overflow-x: hidden;
  padding-top: 64px;
  transition-duration: 0.3s;

  transition-property: background-color, left;
`;

export default Container;
