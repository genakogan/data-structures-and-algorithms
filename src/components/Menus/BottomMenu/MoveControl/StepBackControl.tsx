import React, { ReactElement } from "react";
import Container from "./Container";

interface Props {
  children: JSX.Element | JSX.Element[];
  isVisualizing: boolean;
}

const StepBackControl: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container
      right="calc(100% - 900px)"
      top="calc(100% - 47px)"
      isVisualizing={props.isVisualizing}
    >
      {props.children}
    </Container>
  );
};

export default StepBackControl;
