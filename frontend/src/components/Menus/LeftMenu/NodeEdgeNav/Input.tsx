import styled from 'styled-components';



const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
  
    // or we can define dynamic ones
    size: props.size || "1em",
  }))`
  user-select: none;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
  transition-duration: 0.5s;
  transition-property: background-color;
    /*color: palevioletred;
    font-size: 12px;
    border: 2px solid palevioletred;
    border-radius: 3px;
    height: 1px;*/
   
   //margin: ${props => props.size};
    //padding: ${props => props.size};
  `;
  export default Input;