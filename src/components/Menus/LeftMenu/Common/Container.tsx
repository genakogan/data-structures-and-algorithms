import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const NodeEdgeNavContainer = styled.div<Props>`
  position: fixed;
  height: 100%;
  width: 300px;
  z-index: 2;
  left: ${(props) => (props.isVisible ? 0 : '-300px')};
  background-color: ${(props) => props.theme.sidebar.background};

  overflow-x: hidden;
  padding-top: 64px;
  transition-duration: 0.3s;
  transition-property: background-color, left;
`;

export default NodeEdgeNavContainer;