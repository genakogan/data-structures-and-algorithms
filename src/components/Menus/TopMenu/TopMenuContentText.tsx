import styled from "styled-components";

interface Props {
  fontSize: string;
  underline: string;
  cursor: string;
  marginLeft: string;
  marginRight: string;
}

const TopMenuContentText = styled.div<Props>`
  font-size: ${(props) => props.fontSize};
  margin-left: ${(props) => props.marginLeft};
  margin-right:  ${(props) => props.marginRight};
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select:none;
  cursor: ${(props) => props.cursor};
  &:hover {
    ${(props) => props.underline}
  }
`;

export default TopMenuContentText;
