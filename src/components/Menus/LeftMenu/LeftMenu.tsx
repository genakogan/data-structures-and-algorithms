// Genady Kogan
import React, { ReactElement } from "react";
import AlgorithmsNav from "./AlgorithmsNav/AlgorithmsNav";
import LeftMenuContainer from "./LeftMenuContainer";

interface Props{
  addNewNode: () => void;
}

const LeftMenu: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <LeftMenuContainer>
      <AlgorithmsNav  addNewNode={props.addNewNode}></AlgorithmsNav>
    </LeftMenuContainer>
  );
};

export default LeftMenu;
