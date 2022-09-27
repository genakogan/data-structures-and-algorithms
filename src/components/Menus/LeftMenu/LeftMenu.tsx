// Genady Kogan
import React, { ReactElement } from "react";
import NodeEdgeNav from "./NodeEdgeNav/NodeEdgeNav";
import LeftMenuContainer from "./LeftMenuContainer";
import AlgoruthmsNav from "./AlgoruthmsNav/AlgoruthmsNav";
import Algorithms from "../../../models/Algorithms";

interface Props {
  addNewNode: () => void;
  clearCanvas: () => void;
  connectNodes: Function;
  onUndirectedEdgeClick: VoidFunction;
  adjacencyList: Array<Array<number>>;
  onAddEdge: Function;
  onDirectedEdgeClick: VoidFunction;
  onEdgeDelete: (firstNode: number, secondNode: number) => void;
  onNodeDelete: (node: number) => void;

  setSelectedAlgorithm: Function;
  selectedAlgorithm: Algorithms;
}

const LeftMenu: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <LeftMenuContainer>
      <NodeEdgeNav
        onNodeDelete={props.onNodeDelete}
        onDirectedEdgeClick={props.onDirectedEdgeClick}
        onAddEdge={props.onAddEdge}
        adjacencyList={props.adjacencyList}
        addNewNode={props.addNewNode}
        connectNodes={props.connectNodes}
        clearCanvas={props.clearCanvas}
        onUndirectedEdgeClick={props.onUndirectedEdgeClick}
        onEdgeDelete={props.onEdgeDelete}
      ></NodeEdgeNav>
      <AlgoruthmsNav
        selectedAlgorithm = {props.selectedAlgorithm}
        setSelectedAlgorithm={props.setSelectedAlgorithm}
      ></AlgoruthmsNav>
    </LeftMenuContainer>
  );
};

export default LeftMenu;
