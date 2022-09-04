import React, { ReactElement, useRef } from "react";
import TreeNode from "../TreeNode/TreeNode";
import CanvasContainer from "./CanvasContainer";

interface Props{
  zoomPercentage: number;

}

const Canvas: React.FC<Props> = (props: Props): ReactElement => {
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <CanvasContainer ref={canvasRef}>
      <TreeNode canvasRef={canvasRef} zoomPercentage={props.zoomPercentage} isActive={true} content="1"></TreeNode>

      <TreeNode canvasRef={canvasRef} zoomPercentage={props.zoomPercentage} isActive={true} content="2"></TreeNode>
    </CanvasContainer>
  );
};

export default Canvas;
