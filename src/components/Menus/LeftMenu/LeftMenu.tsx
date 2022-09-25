// Genady Kogan
import React, { ReactElement } from "react";
import NodeEdgeNav from "./NodeEdgeNav/NodeEdgeNav";
import LeftMenuContainer from "./LeftMenuContainer";

interface Props {
  addNewNode: () => void;
  clearCanvas: () => void;
  connectNodes: Function
  onUndirectedEdgeClick: VoidFunction;
  adjacencyList: Array<Array<number>>;
  onAddEdge: Function;
  onDirectedEdgeClick: VoidFunction;
}

const LeftMenu: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <LeftMenuContainer>
      <NodeEdgeNav
        onDirectedEdgeClick = {props.onDirectedEdgeClick}
        onAddEdge = {props.onAddEdge}
        adjacencyList = {props.adjacencyList}
        addNewNode={props.addNewNode}
        connectNodes={props.connectNodes}
        clearCanvas={props.clearCanvas}
        onUndirectedEdgeClick = {props.onUndirectedEdgeClick}
      ></NodeEdgeNav>
      
    </LeftMenuContainer>
  );
};

export default LeftMenu;
