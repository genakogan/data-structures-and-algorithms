// Genady Kogan
import styled from "styled-components";

interface Props{
  top: string;
  right: string;
  isVisualizing: boolean;
}
const Container = styled.div<Props>`
  z-index: 1;
  position: fixed;
  padding-rigt: 200px;
  right: ${(props)=> props.right};
  top: ${(props)=> props.top};
  //padding-left: 20px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.isVisualizing ? 'red' : props.theme.navbar.background};
  color: white;
  transition-duration: 0.5s;
  user-select: none;
  cursor: pointer;

 /* &:hover {
    border-radius: 30px;
  width: 60px;
  height: 60px;
  border-top: 1px solid red;
  border-right: 1px solid blue;
  border-bottom: 1px solid green;
  border-left: 1px solid pink;
  transform: rotate(45deg)
  }*/
`;

export default Container;
