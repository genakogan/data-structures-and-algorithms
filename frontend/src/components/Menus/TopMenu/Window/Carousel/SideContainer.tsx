import styled from "styled-components";

interface Props {
    direction: 'left' | 'right';
  }

const SideContainer = styled.div<Props>`
  height: 100%;
  width: 50px;
  display: center;
  //justify-content: center;
  //align-items: center;
 
 
  //background-color: red;
  transition: background-color 0.5s;
  border-radius: ${(props) =>
    props.direction === 'left' ? '7.5px 0px 0px 7.5px' : '0px 7.5px 7.5px 0px'};

`;

export default SideContainer;
