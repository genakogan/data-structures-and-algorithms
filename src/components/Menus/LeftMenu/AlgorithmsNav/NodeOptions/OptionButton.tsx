//import React, {ReactElement, ReactChild, ReactChildren, useState} from 'react';
import React, { ReactElement, useState } from "react";
import NodeOptionContainer from "./NodeOptionContainer";

interface Props {
 
  children: JSX.Element | JSX.Element[];
  tooltipContent: string;
}

const OptionButton: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <NodeOptionContainer >
      {props.children}
    </NodeOptionContainer>
  );
};

export default OptionButton;
