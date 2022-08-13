import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.navbar.background};
  display: flex;
  justify-content: left;
  align-items: left;
`;

export default Container;
