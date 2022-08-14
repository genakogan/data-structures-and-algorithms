import styled from "styled-components";

interface Props {
  fontSize: string;
  underline: string;
  cursor: string;
}

const Titles = styled.div<Props>`
  font-size: ${(props) => props.fontSize};

  margin-left: 20px;
  margin-right: 20px;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  cursor: ${(props) => props.cursor};
  &:hover {
    ${(props) => props.underline}
  }
`;

export default Titles;
