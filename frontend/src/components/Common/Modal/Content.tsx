import styled from 'styled-components';

const Content = styled.div`
  min-width: 300px;
  min-height: 200px;
  border-radius: 7.5px;
  background-color: ${(props) => props.theme.sidebar.background};
  z-index: 9998;
  color: ${(props) => props.theme.sidebar.foreground};
`;

export default Content;
