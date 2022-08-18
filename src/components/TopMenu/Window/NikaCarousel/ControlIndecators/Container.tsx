import styled from 'styled-components';


interface Props {
  isSelected: boolean;
}

const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.5s;
`;

export default Circle;
