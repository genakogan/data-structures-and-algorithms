// Genady Kogan
import styled from 'styled-components';
import Theme from '../../models/Theme';
import TreeNodePosition from '../../models/TreeNodePosition';

interface Props {
  theme: Theme;
  isActive: boolean;
  position: TreeNodePosition;
}

const TreeNodeContainer = styled.div.attrs((props: Props) => ({
    style: {
      top: `${props.position.top}px`,
      left: `${props.position.left}px`,
    },
  }))<Props>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 80px;
  width: 80px;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.background
      : props.theme.nodeInactive.background};

  color: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.foreground
      : props.theme.nodeInactive.foreground};
  border-radius: 80px;
  border-width: 2px;
  border-style: solid;
  transition-duration: 0.5s;
  transition-property: background-color, border;
  user-select: none;
  cursor: move;
`;

export default TreeNodeContainer;
