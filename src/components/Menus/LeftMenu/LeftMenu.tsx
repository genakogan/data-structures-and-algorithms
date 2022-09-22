// Genady Kogan
import React, { ReactElement } from "react";
import AlgorithmsNav from "./AlgorithmsNav/AlgorithmsNav";
import LeftMenuContainer from "./LeftMenuContainer";

interface Props {
  addNewNode: () => void;
  clearCanvas: () => void;
  onUndirectedEdgeClick: VoidFunction;
}

const LeftMenu: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <LeftMenuContainer>
      <AlgorithmsNav
        addNewNode={props.addNewNode}
        clearCanvas={props.clearCanvas}
        onUndirectedEdgeClick = {props.onUndirectedEdgeClick}
      ></AlgorithmsNav>
    </LeftMenuContainer>
  );
};

export default LeftMenu;
