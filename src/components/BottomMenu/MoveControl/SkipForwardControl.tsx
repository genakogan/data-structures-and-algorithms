import React, { ReactElement } from "react";
import SkipForwardContainer from "./Container";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SkipForwardControl: React.FC<Props> = (props: Props): ReactElement => {
  return <SkipForwardContainer left = 'calc(100% - 400px)' top = 'calc(100% - 47px)'>{props.children}</SkipForwardContainer>;
};

export default SkipForwardControl;
