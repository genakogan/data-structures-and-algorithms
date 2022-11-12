import styled from 'styled-components';

interface Props {
  isVisited: boolean;
}

const StyledPolygon = styled.polygon<Props>`
  fill: ${(props) => (props.isVisited ? 'red' : props.theme.edge.background)};
  transition: 0.5s fill;
`;

export default StyledPolygon;
