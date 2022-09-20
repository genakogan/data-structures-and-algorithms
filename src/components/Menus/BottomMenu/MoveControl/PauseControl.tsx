import React, { ReactElement } from "react";
import Container from "./Container";

interface Props {
  children: JSX.Element | JSX.Element[];
  isVisualizing: boolean;
}

const PauseControl: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container
      right="calc(100% - 1000px)"
      top="calc(100% - 47px)"
      isVisualizing={props.isVisualizing}
    >
      {props.children}
    </Container>
  );
};

export default PauseControl;
