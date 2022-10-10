import React, { ReactElement, useState } from "react";
import ToolTip from "../../../Common/ToolTip";
import Container from "./Container";

interface Props {
  children: JSX.Element | JSX.Element[];
  isVisualizing: boolean;
  tooltipContent: string;
}

const ReplayControl: React.FC<Props> = (props: Props): ReactElement => {
  const [isToolTipVisible, setIsToolTipVisible] = useState<boolean>(false);
  return (
    <Container
      right="calc(100% - 1050px)"
      top="calc(100% - 47px)"
      isVisualizing={props.isVisualizing}
      onMouseEnter={() => setIsToolTipVisible(true)}
      onMouseLeave={() => setIsToolTipVisible(false)}
    >
      <ToolTip top="-35px" left="none" isVisible={isToolTipVisible}>
        {props.tooltipContent}
      </ToolTip>
      {props.children}
    </Container>
  );
};

export default ReplayControl;
