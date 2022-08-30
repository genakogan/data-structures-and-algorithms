import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const AlgorithmsNavContainer = styled.div<Props>`
  position: fixed;
  height: 100%;
  width: 300px;
  z-index: 1;
  left: ${(props) => (props.isVisible ? 0 : '-300px')};
  //background-color: ${(props) => props.theme.sidebar.background};
  background-color: red;
  overflow-x: hidden;
  padding-top: 64px;
  transition-duration: 0.3s;
  transition-property: background-color, left;
`;

export default AlgorithmsNavContainer;