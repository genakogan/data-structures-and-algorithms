import styled from 'styled-components';

interface Props {
  fontSize: string;
}

const LeftMenuContentText = styled.div<Props>`
  color: ${(props) => props.theme.sidebar.foreground};
  user-select: none;
  font-size: ${(props) => props.fontSize};
`;

export default LeftMenuContentText;
