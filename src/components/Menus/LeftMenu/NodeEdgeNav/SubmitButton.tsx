import styled from "styled-components";
import { isPropertySignature } from "typescript";
import themes from "../../../../themes";


interface Props{
  type: string;
  value: string;
  width: string;
  theme: string;
}

const SubmitButton = styled.input.attrs((props: Props)=>({ 
    type: 'submit',
    value: props.value,
    width: props.width,
    theme: props.theme,
  }))`
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
  //border-color: white;
  border: 0px ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
  user-select: none;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    background-color: red;
  }
  `;

  export default SubmitButton;