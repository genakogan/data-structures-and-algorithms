import React, { ReactElement, RefObject, useEffect, useState } from "react";
import Position from "../../../models/Position";
import StyledEdgeContainer from "./StyledEdgeContainer";
import StyledEdgeLine from "./StyledEdgeLine";

interface EdgeProps {
  n1: RefObject<HTMLSpanElement>;
  n2: RefObject<HTMLSpanElement>;
}

const TreeEdge: React.FC<EdgeProps> = (props: EdgeProps): ReactElement => {
  const [position1, setPosition1] = useState<Position>({ top: 0, left: 0 });
  const [position2, setPosition2] = useState<Position>({ top: 0, left: 0 });

  useEffect(() => {
    if (props.n1.current) {
      const handler = (e: CustomEventInit<Position>) => {
        if (e?.detail) {
          const newPosition1: Position = e.detail;
          setPosition1(newPosition1);
        }
      };
      props.n1.current.addEventListener("position", handler);

      return () => props.n1.current?.removeEventListener("position", handler);
    }
  });

  useEffect(() => {
    if (props.n2.current) {
      const handler = (e: CustomEventInit<Position>) => {
        if (e?.detail) {
          const newPosition2: Position = e.detail;
          setPosition2(newPosition2);
        }
      };
      props.n2.current.addEventListener("position", handler);
      return () => props.n2.current?.removeEventListener("position", handler);
    }
  });
  return (
    <StyledEdgeContainer
      height={Math.max(position1.top, position2.top)}
      width={Math.max(position1.left, position2.left)}
    >
      <StyledEdgeLine
        x1={position1.left}
        y1={position1.top}
        x2={position2.left}
        y2={position2.top}
      />
    </StyledEdgeContainer>
  );
};

export default TreeEdge;
