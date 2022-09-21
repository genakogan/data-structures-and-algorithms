import React, { ReactElement, RefObject, useEffect, useState } from "react";
import Position from "../../../models/Position";
import StyledEdgeContainer from "./StyledEdgeContainer";
import StyledEdgeLine from "./StyledEdgeLine";

interface EdgeProps {
  n1: RefObject<HTMLSpanElement>;
  n2: RefObject<HTMLSpanElement>;
}

const TreeEdge: React.FC<EdgeProps> = (props: EdgeProps): ReactElement => {
  const [position1, setPosition1] = useState<Position | null>(null);
  const [position2, setPosition2] = useState<Position | null>(null);

  useEffect(() => {
    if (props.n1.current && props.n1.current.parentElement) {
      const initialTop: number = +props.n1.current.parentElement.style.top.replace(
        'px',
        ''
      );
      const initialLeft: number = +props.n1.current.parentElement.style.left.replace(
        'px',
        ''
      );
      const nodeRadius: number = props.n1.current.parentElement.offsetWidth / 2;
      const initialPosition1: Position = {
        top: initialTop + nodeRadius,
        left: initialLeft + nodeRadius,
      };
      const handler = (e: CustomEventInit<Position>) => {
        if (e?.detail) {
          const newPosition1: Position = e.detail;
          setPosition1(newPosition1);
        }
      };
      props.n1.current.addEventListener('position', handler);
      if (!position1) {
        setPosition1(initialPosition1);
      }
      return () => props.n1.current?.removeEventListener('position', handler);
    }
  }, [props.n1, position1]);

  useEffect(() => {
    if (props.n2.current && props.n2.current.parentElement) {
      const initialTop: number = +props.n2.current.parentElement.style.top.replace(
        'px',
        ''
      );
      const initialLeft: number = +props.n2.current.parentElement.style.left.replace(
        'px',
        ''
      );
      const nodeRadius: number = props.n2.current.parentElement.offsetWidth / 2;
      const initialPosition1: Position = {
        top: initialTop + nodeRadius,
        left: initialLeft + nodeRadius,
      };
      const handler = (e: CustomEventInit<Position>) => {
        if (e?.detail) {
          const newPosition2: Position = e.detail;
          setPosition2(newPosition2);
        }
      };
      props.n2.current.addEventListener('position', handler);
      if (!position2) {
        setPosition2(initialPosition1);
      }
      return () => props.n2.current?.removeEventListener('position', handler);
    }
  }, [props.n2, position2]);

  return (
    <StyledEdgeContainer
      height={Math.max(
        position1 ? position1.top + 3 : 0,
        position2 ? position2.top + 3 : 0
      )}
      width={Math.max(
        position1 ? position1.left + 3 : 0,
        position2 ? position2.left + 3 : 0
      )}
    >
      <StyledEdgeLine
        x1={position1 ? position1.left : 0}
        y1={position1 ? position1.top : 0}
        x2={position2 ? position2.left : 0}
        y2={position2 ? position2.top : 0}
      />
    </StyledEdgeContainer>
  );
};

export default TreeEdge;
