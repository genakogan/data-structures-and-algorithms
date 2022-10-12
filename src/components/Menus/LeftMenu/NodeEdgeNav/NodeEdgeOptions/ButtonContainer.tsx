import styled from 'styled-components';
import themes from '../../../../../themes';

interface Props {
  width:string;
}
const ClearButton = styled.div<Props>`
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
  color: white;
  height: 30px;
  width:  ${(props) => props.width};
  font-size: 18px;
  margin: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    background-color: red;
  }
`;

export default ClearButton;
