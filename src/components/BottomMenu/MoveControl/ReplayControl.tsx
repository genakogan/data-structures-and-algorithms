import React, { ReactElement } from "react";
import Container from "./Container";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ReplayControl: React.FC<Props> = (props: Props): ReactElement => {
  return <Container left = 'calc(100% - 400px - 200px)'  top = 'calc(100% - 47px)'>{props.children}</Container>;
};

export default ReplayControl;
