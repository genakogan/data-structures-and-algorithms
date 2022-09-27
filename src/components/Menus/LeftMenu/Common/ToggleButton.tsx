// Genady Kogan
import styled from 'styled-components';

interface Props {
  isVisible: boolean;
  top:string;
}

const ToggleButton = styled.div.attrs((props: Props) => ({
  width: 32,
  isVisible: props.isVisible ?? false,
  top: props.top,
}))`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) =>
    props.isVisible
      ? `calc(300px - ${props.width}px / 2 - 8px)`
      : `${props.width-10-props.width/2}px`};
  top: ${(props) => props.top};
  z-index: 3;
  height: ${(props) => `${props.width}px`};
  width: ${(props) => `${props.width}px`};
  border-radius: ${(props) => `${props.width}px`};
  background-color: ${(props) => props.theme.sidebar.background};
  transition-duration: 0.3s;
  cursor: pointer;
  border: 3px solid red;
  &:focus {
    outline: none;
    border-color: red;
  }
`;

export default ToggleButton;
