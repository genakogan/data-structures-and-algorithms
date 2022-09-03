import React, { ReactElement, useState, useRef, useEffect } from "react";
import TreeNodeContainer from "./TreeNodeContainer";
import TreeNodePosition from "../../models/TreeNodePosition";

interface Props {
  isActive: boolean;
  content: string;
  canvasRef: React.RefObject<HTMLDivElement>;
}
const GraphNode: React.FC<Props> = (props: Props): ReactElement => {
  const nodeRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const canvasRef: React.RefObject<HTMLDivElement> = props.canvasRef;
  const [position, setPosition] = useState<TreeNodePosition>({
    top: 200,
    left: 600,
  });
  const handleMouseUp = () => {
    document.onmousemove = null;
  };
  const handleMouseDown = () => {
    document.onmousemove = handleMouseMove;
    document.onmouseup = handleMouseUp;
  };
  const handleMouseMove =(e: MouseEvent)=>{
    if (null != nodeRef.current && null != canvasRef.current){
      const nodeWidth: number =+ nodeRef.current.offsetWidth;
      const canvasWidth: number =+ canvasRef.current.offsetWidth;
      const canvasHeight: number = +canvasRef.current.offsetHeight;
      let newLeft: number = e.clientX - nodeWidth / 2;
      let newTop: number = e.clientY - nodeWidth;

      if (0  >= e.clientX - nodeWidth / 2) {
        newLeft = 0;
      } else if (e.clientX - nodeWidth / 2 >= canvasWidth - nodeWidth) {
        newLeft = canvasWidth - nodeWidth;
      }

      if (0 >= e.clientY - nodeWidth ) {
        newTop = 0;
      } else if (e.clientY - nodeWidth >= canvasHeight - nodeWidth) {
        newTop = canvasHeight - nodeWidth;
      }

      setPosition({
        top: newTop,
        left: newLeft,
      });
    }
  }
  

  return (
    <TreeNodeContainer
      isActive={props.isActive}
      position={position}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      ref={nodeRef}
    >
      {props.content}
    </TreeNodeContainer>
  );
};

export default GraphNode;