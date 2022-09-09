// Genady Kogan
import React, { ReactElement, useRef } from "react";
import TreeEdge from "../Tree/TreeEdge/TreeEdge";
import TreeNode from "../Tree/TreeNode/TreeNode";

import CanvasContainer from "./CanvasContainer";

interface Props {
  adjacencyList: Array<Array<number>>;
  nodeKeys: Array<string>;
  zoomPercentage: number;
  addNewNode: () => void;
}

const Canvas: React.FC<Props> = (props: Props): ReactElement => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const adjacencyList = props.adjacencyList;
  const connectedNodePairs: Array<Array<number>> = [];
  const reducedEdges: Map<number, Array<number>> = new Map();
  const nodeRefs = adjacencyList.map((_) => React.createRef<HTMLSpanElement>());

  adjacencyList.forEach((adjacentNodes: Array<number>, currentNode: number) => {
    const currentNodeEdges: Array<number> = [];
    adjacentNodes.forEach((adjacentNode: number) => {
      // if true
      if (!reducedEdges.get(adjacentNode)?.includes(currentNode)) {
        currentNodeEdges.push(adjacentNode);
        connectedNodePairs.push([currentNode, adjacentNode]);
      }
    });
    if (currentNodeEdges.length !== 0) {
      reducedEdges.set(currentNode, currentNodeEdges);
    }
  });

  return (
    <CanvasContainer ref={canvasRef}>
      {adjacencyList.map((val: Array<number>, index: number) => {
        return (
          <TreeNode
            key={props.nodeKeys[index]}
            canvasRef={canvasRef}
            zoomPercentage={props.zoomPercentage}
            isActive={true}
            edgeRef={nodeRefs[index]}
            nodeIdex={index}
          >
            <span ref={nodeRefs[index]}></span>
          </TreeNode>
        );
      })}

      {connectedNodePairs.map(([n1, n2]: Array<number>, index: number) => {
        return <TreeEdge n1={nodeRefs[n2]} n2={nodeRefs[n1]} key={index} />;
      })}
    </CanvasContainer>
  );
};

export default Canvas;
