import styled from "styled-components";

interface Props {
  fontSize: string;
  underline: string;
  cursor: string;
  userSelect: string;
  marginLeft: string;
  marginRight: string;
  left: string;
}

const Titles = styled.div<Props>`
  font-size: ${(props) => props.fontSize};
  margin-left: ${(props) => props.marginLeft};
  margin-right:  ${(props) => props.marginRight};
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select:${(props) => props.userSelect};
  cursor: ${(props) => props.cursor};
  &:hover {
    ${(props) => props.underline}
  }
  position: absolute;
  color:red;
  left:${(props) => props.left};
`;

export default Titles;
