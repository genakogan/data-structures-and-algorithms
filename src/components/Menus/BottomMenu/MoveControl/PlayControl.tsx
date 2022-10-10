// Genady Kogan
import React, { ReactElement, useState } from "react";
import ToolTip from "../../../Common/ToolTip";
import Container from "./Container";

interface Props {
  children: JSX.Element | JSX.Element[];
  onClick: Function;
  isVisualizing: boolean;
  tooltipContent: string;
}

const PlayControl: React.FC<Props> = (props: Props): ReactElement => {
  const [isToolTipVisible, setIsToolTipVisible] = useState<boolean>(false);
  return (
    <Container
      right="calc(100% - 950px)"
      top="calc(100% - 47px)"
      onClick={() => props.onClick()}
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

export default PlayControl;
