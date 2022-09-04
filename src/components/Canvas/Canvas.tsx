import React, { ReactElement, useRef, useState } from "react";
import TreeNode from "../TreeNode/TreeNode";
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

  return (
    <CanvasContainer ref={canvasRef}>
      {adjacencyList.map((val: Array<number>, index: number) => {
        return (
          <TreeNode
            canvasRef={canvasRef}
            zoomPercentage={props.zoomPercentage}
            isActive={true}
            content="1"
          ></TreeNode>
        );
      })}
    </CanvasContainer>
  );
};

export default Canvas;
