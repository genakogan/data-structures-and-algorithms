// Genady Kogan
import React, { ReactElement } from "react";
import NodeOptionContainer from "./NodeOptionContainer";

interface Props {
  onClick: Function;
  children: JSX.Element | JSX.Element[];
  tooltipContent: string;
}

const OptionButton: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <NodeOptionContainer onClick={() => props.onClick()}>
      {props.children}
    </NodeOptionContainer>
  );
};

export default OptionButton;
