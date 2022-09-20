import styled from "styled-components";



const StyledLink = styled.line`
    stroke: ${(props) => props.theme.edge.background};
    stroke-width: 3px;
    transition-duration: 0.5s;
    position:absolute;
`;

export default StyledLink;