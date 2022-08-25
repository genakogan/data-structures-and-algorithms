import styled from "styled-components";

interface Props {
    direction: 'left' | 'right';
  }

const SideContainer = styled.div<Props>`
  height: 100%;
  width: 50px;
  display: center;
  justify-content: flex;
  align-items: center;
`;

export default SideContainer;
