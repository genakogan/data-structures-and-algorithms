// Genady Kogan
import React, { ReactElement, useRef } from "react";
import TreeEdge from "../Tree/TreeEdge/TreeEdge";
import TreeNode from "../Tree/TreeNode/TreeNode";

import CanvasContainer from "./CanvasContainer";

interface Props {
  adjacencyList: Array<Array<number>>;
  nodeKeys: Array<string>;
  zoomPercentage: number;
  visited: Array<number>;
  currentEdge: [number, number];
  //==========================================
  userSelectedTreeNodeArray: Array<number>;
}

const Canvas: React.FC<Props> = (props: Props): ReactElement => {
  const currentEdge = props.currentEdge;
  const canvasRef = useRef<HTMLDivElement>(null);
  const adjacencyList = props.adjacencyList;
  const connectedNodePairs: Array<Array<number>> = [];
  const reducedEdges: Map<number, Array<number>> = new Map();
  const nodeRefs = adjacencyList.map((_) => React.createRef<HTMLSpanElement>());

  const visited = props.visited;

  // adjacencyList = [[],[0,2],[0],[]];
  adjacencyList.forEach((adjacentNodes: Array<number>, currentNode: number) => {
    // adjacentNodes -> [], [0,2], [0], []

    const currentNodeEdges: Array<number> = [];

    adjacentNodes.forEach((adjacentNode: number) => {
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
            isActive={visited.includes(index)}
            edgeRef={nodeRefs[index]}
            nodeIdex={index}
          >
            <span ref={nodeRefs[index]}></span>
          </TreeNode>
        );
      })}

      {adjacencyList.map((val: Array<number>, index: number) => {
        return (
          <TreeNode
            key={props.nodeKeys[index]}
            canvasRef={canvasRef}
            zoomPercentage={props.zoomPercentage}
            isActive={visited.includes(index)}
            edgeRef={nodeRefs[index]}
            nodeIdex={index+1}
          >
            <span ref={nodeRefs[index]}></span>
          </TreeNode>
        );
      })}

      {connectedNodePairs.map(([n1, n2]: Array<number>, index: number) => {
        const isVisited: boolean =
          (currentEdge[0] === n1 && currentEdge[1] === n2) ||
          (currentEdge[0] === n2 && currentEdge[1] === n1);
        return (
          <TreeEdge
            n1={nodeRefs[n1]}
            n2={nodeRefs[n2]}
            key={`${props.nodeKeys[n1]}${props.nodeKeys[n2]}`}
            edgeKey={`${props.nodeKeys[n1]}${props.nodeKeys[n2]}`}
            isDirected={!adjacencyList[n2].includes(n1)}
            zoomPercentage={props.zoomPercentage}
            isVisited={isVisited}
          />
        );
      })}
    </CanvasContainer>
  );
};

export default Canvas;
