// Genady Kogan
import { ReactElement, useState } from "react";
import Row from "../../../Common/Row";
import Titles from "../../../Common/Titles";
import Column from "./Column";
import Container from "./Container";
import ControlIndecators from "./ControlIndecators/ControlIndecators";
import SideContainer from "./SideContainer";

interface Props {
  children?: Array<ReactElement>;
}

const Carousel: React.FC<Props> = (props: Props): ReactElement => {
  const [currrentLoaction, setCurrentLocation] = useState<number>(0);

  const previous = () => {
    if (0 === currrentLoaction)
      setCurrentLocation((props.children?.length ?? 1) - 1);
    else setCurrentLocation((prev) => prev - 1);
  };

  const next = () => {
    if ((props.children?.length ?? 1) - 1 === currrentLoaction)
      setCurrentLocation(0);
    else setCurrentLocation((prev) => prev + 1);
  };

  const onCircleSelect = (index: number) => {
    setCurrentLocation(index);
  };

  return (
    <Container>
     
        <Row justifyContent="space-between" margin="475px 0px">
          <Titles
            onClick={() => previous()}
            fontSize="18px"
            underline="text-decoration: underline"
            cursor="pointer"
            userSelect="none"
          >
            Prev
          </Titles>
        </Row>
      

      <Column width="100%">
      <Row justifyContent="center" style={{ height: "90%", width: "100%" }}>
          {(props.children ?? [<div></div>])[currrentLoaction]}
        </Row>
        <Row justifyContent="center" style={{ height: "10%", width: "100%" }}>
          <ControlIndecators
            circlesCount={props.children?.length ?? 0}
            isSelected={currrentLoaction}
            onCircleSelect={onCircleSelect}
          ></ControlIndecators>
        </Row>
        
      </Column>

      
      <Row justifyContent="space-between" margin="475px 0px">
          <Titles
            onClick={() => next()}
            fontSize="18px"
            underline="text-decoration: underline"
            cursor="pointer"
            userSelect="none"
          >
            Next
          </Titles>
        </Row>
      
    </Container>
  );
};

export default Carousel;
