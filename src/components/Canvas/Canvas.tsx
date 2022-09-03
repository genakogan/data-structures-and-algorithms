import React, { ReactElement, useRef, useState } from "react";
import TreeNode from "../TreeNode/TreeNode";
import CanvasContainer from "./CanvasContainer";



const Canvas: React.FC = (): ReactElement => {
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <CanvasContainer ref={canvasRef}>
      <TreeNode canvasRef={canvasRef} isActive={true} content="1"></TreeNode>

      <TreeNode canvasRef={canvasRef} isActive={true} content="2"></TreeNode>
    </CanvasContainer>
  );
};

export default Canvas;
