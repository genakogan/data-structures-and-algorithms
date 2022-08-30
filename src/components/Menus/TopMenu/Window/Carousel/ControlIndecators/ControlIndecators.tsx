import React, { ReactElement } from "react";
import Container from "./Container";

interface Props {
  circlesCount: number;
  isSelected: number;
  onCircleSelect: (index: number) => void;
}

const ControlIndecators: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <React.Fragment>
      {[...Array(props.circlesCount)].map((_, index: number) => {
        return (
          <Container
            isSelected={index === props.isSelected}
            key={index}
            onClick={() => props.onCircleSelect(index)}
          ></Container>
        );
      })}
    </React.Fragment>
  );
};

export default ControlIndecators;
