import React, { ReactElement } from "react";
import PauseContainer from "./Container";

interface Props {
  
  children: JSX.Element | JSX.Element[];
}

const PauseControl: React.FC<Props> = (props: Props): ReactElement => {
  return <PauseContainer left = 'calc(100% - 400px - 150px)' top='calc(100% - 47px)'>{props.children}</PauseContainer>;
};

export default PauseControl;
