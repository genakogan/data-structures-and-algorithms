import React, { ReactElement, useEffect } from "react";
import Container from "./Container";
import Content from "./Content";

interface Props {
  isVisible: boolean;
  onExit: Function;
  children: JSX.Element | JSX.Element[];
}

const Modal: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <React.Fragment>
      {props.isVisible ? (
        <Container
          onClick={(e: React.MouseEvent) => {
            props.onExit();
          }}
        >
          <Content
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
            }}
          ></Content>
        </Container>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Modal;
