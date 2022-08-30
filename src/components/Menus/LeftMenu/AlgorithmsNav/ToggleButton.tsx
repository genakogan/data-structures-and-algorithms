import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const ToggleButton = styled.div.attrs((props: Props) => ({
  width: 32,
  isVisible: props.isVisible ?? false,
}))`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) =>
    props.isVisible
      ? `calc(300px - ${props.width}px / 2 - 8px)`
      : `${props.width-props.width/2}px`};
  top: 250 -50%;
  z-index: 2;
  height: ${(props) => `${props.width}px`};
  width: ${(props) => `${props.width}px`};
  border-radius: ${(props) => `${props.width}px`};
  background-color: ${(props) => props.theme.sidebar.background};
  border: 1px red;
  transition-duration: 0.3s;
  cursor: pointer;
  border: 1px solid red;
  &:focus {
    outline: none;
    border-color: red;
  }
`;

export default ToggleButton;