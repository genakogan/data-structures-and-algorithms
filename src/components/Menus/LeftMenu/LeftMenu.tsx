// Genady Kogan
import React, { ReactElement, useState } from "react";
import NodeEdgeNav from "./NodeEdgeNav/NodeEdgeNav";
import LeftMenuContainer from "./LeftMenuContainer";
import AlgorithmsNav from "./AlgorithmsNav/AlgorithmsNav";
import Algorithms from "../../../models/Algorithms";
import ToggleButton from "./Common/ToggleButton";
import Arrow from "./Common/Arrow";
import ToolTip from "../../Common/ToolTip";

interface Props {
  /* node and edge */
  addNewNode: () => void;
  clearCanvas: () => void;
  connectNodes: Function;
  onUndirectedEdgeClick: VoidFunction;
  adjacencyList: Array<Array<number>>;
  onAddEdge: Function;
  onDirectedEdgeClick: VoidFunction;
  onEdgeDelete: (firstNode: number, secondNode: number) => void;
  onNodeDelete: (node: number) => void;
  /* algorithms */
  setSelectedAlgorithm: Function;
  selectedAlgorithm: Algorithms;
  startingNode: number;
  setStartingNode: Function;

  transferArrayData: (userSelectedTreeNodeArray: Array<number>)=>void;
}
const LeftMenu: React.FC<Props> = (props: Props): ReactElement => {
  const [isNodeEdgeNavVisible, setNodeEdgeNavVisible] =
    useState<boolean>(false);
  const [isAlgorithmsVisible, setAlgorithmsIsVisible] =
    useState<boolean>(false);

  /*tooltip visibility */
  const [isNodeEdgeTooltipVisible, setIsNodeedgeToolTipVisible] =
    useState<boolean>(false);
  const [isAlgorithmsTooltipVisible, setIsAlgorithmsToolTipVisible] =
    useState<boolean>(false);

  const adjacencyList = props.adjacencyList;
  /* management of node-edge control */
  const toggleNodeEdgeVisibility = () => {
    if (isAlgorithmsVisible) {
      setAlgorithmsIsVisible((prev) => !prev);
    }
    setNodeEdgeNavVisible((prev) => !prev);
    
  };

    /* management of algorithms control */
  const toggleAlgoritmsVisibility = () => {
    if (isNodeEdgeNavVisible) {
      setNodeEdgeNavVisible((prev) => !prev);
    }
    setAlgorithmsIsVisible((prev) => !prev);
  };


  return (
    <LeftMenuContainer>
      {/* node-edge toggleButton*/}
      <ToggleButton
        onMouseEnter={() => setIsNodeedgeToolTipVisible(true)}
        onMouseLeave={() => setIsNodeedgeToolTipVisible(false)}
        top="100px"
        isVisible={isNodeEdgeNavVisible}
        onClick={() => toggleNodeEdgeVisibility()}
      >
        <ToolTip top="none" left="50px" isVisible={isNodeEdgeTooltipVisible}>
          {"Node-edge"}
        </ToolTip>
        <Arrow isVisible={isNodeEdgeNavVisible}></Arrow>
      </ToggleButton>

      {/* algorithms toggleButton*/}
      <ToggleButton
        onMouseEnter={() => setIsAlgorithmsToolTipVisible(true)}
        onMouseLeave={() => setIsAlgorithmsToolTipVisible(false)}
        top="150px"
        isVisible={isAlgorithmsVisible}
        onClick={() => toggleAlgoritmsVisibility()}
      >
        <ToolTip top="none" left="50px" isVisible={isAlgorithmsTooltipVisible}>
          {"Algorithms"}
        </ToolTip>
        <Arrow isVisible={isAlgorithmsVisible}></Arrow>
      </ToggleButton>

      <NodeEdgeNav
        isVisible={isNodeEdgeNavVisible}
        addNewNode={props.addNewNode}
        adjacencyList={adjacencyList}
        onNodeDelete={props.onNodeDelete}
        connectNodes={props.connectNodes}
        onEdgeDelete={props.onEdgeDelete}
        clearCanvas={props.clearCanvas}

        transferArrayData={props.transferArrayData}
      ></NodeEdgeNav>

      <AlgorithmsNav
        isVisible={isAlgorithmsVisible}
        selectedAlgorithm={props.selectedAlgorithm}
        setSelectedAlgorithm={props.setSelectedAlgorithm}
        selectedTile={props.startingNode}
        setStartingNode={props.setStartingNode}
        adjacencyList={adjacencyList}
      ></AlgorithmsNav>
    </LeftMenuContainer>
  );
};

export default LeftMenu;
