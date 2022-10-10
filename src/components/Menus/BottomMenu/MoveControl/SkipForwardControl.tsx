import React, { ReactElement, useState } from "react";
import ToolTip from "../../../Common/ToolTip";
import SkipForwardContainer from "./Container";

interface Props {
  children: JSX.Element | JSX.Element[];
  isVisualizing: boolean;
  tooltipContent: string;
}

const SkipForwardControl: React.FC<Props> = (props: Props): ReactElement => {
  const [isToolTipVisible, setIsToolTipVisible] = useState<boolean>(false);
  return (
    <SkipForwardContainer
      right="calc(100% - 1150px )"
      top="calc(100% - 47px)"
      isVisualizing={props.isVisualizing}
      onMouseEnter={() => setIsToolTipVisible(true)}
      onMouseLeave={() => setIsToolTipVisible(false)}
    >
      <ToolTip top="-35px" left="none" isVisible={isToolTipVisible}>
        {props.tooltipContent}
      </ToolTip>
      {props.children}
    </SkipForwardContainer>
  );
};

export default SkipForwardControl;
