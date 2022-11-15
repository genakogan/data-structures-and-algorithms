import styled from 'styled-components';
import themes from '../../../../../../themes';


interface Props {
  isSelected: boolean;
}

const Circle = styled.div<Props>`
  height: 12px;
  width: 12px;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.name === 'dark'
        ? themes.light.navbar.background
        : themes.dark.navbar.background
      : props.theme.name === 'dark'
      ? '#C4C4C4'
      : 'red'};;
  transition: background-color 0.5s;
`;

export default Circle;
