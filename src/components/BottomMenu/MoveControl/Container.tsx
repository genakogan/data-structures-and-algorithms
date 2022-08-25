// Genady Kogan
import styled from "styled-components";

interface Props{
  top: string;
  left: string;
}
const Container = styled.div<Props>`
  z-index: 1;
  position: fixed;
  right: ${(props)=> props.left};
  top: ${(props)=> props.top};
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  margin-right: 20px;
  margin-bottom: 20px;
  
  color: white;
  transition-duration: 0.5s;
  user-select: none;
  cursor: pointer;

 /* &:hover {
    letter-spacing: 3px;
    width: 160px;
    left: calc(100% - 155px - 20px);
  }*
`;

export default Container;
