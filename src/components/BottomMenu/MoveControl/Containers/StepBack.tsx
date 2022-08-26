import styled from "styled-components";

const StepBack = styled.div`
  z-index: 999;
  position: fixed;
  left: calc(100% - 350px - 20px);
  top: calc(100% - 50px - 20px);
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
  transition-duration: 0.3s;
  user-select: none;
  cursor: pointer;

 /* &:hover {
    letter-spacing: 3px;
    width: 160px;
    left: calc(100% - 155px - 20px);
  }*
`;

export default StepBack;
