import styled from 'styled-components';

interface Props {
  fontSize: string;
}

const LeftMenuBottomContentText = styled.div<Props>`
  color: 'white';
  user-select: none;
  font-size: ${(props) => props.fontSize};
`;

export default LeftMenuBottomContentText;
