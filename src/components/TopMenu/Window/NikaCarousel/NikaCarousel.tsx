
import { ReactElement } from "react";
import Row from "../../../Common/Row";
import Column from "./Column";
import Container from "./Container";
import ControlIndecators from "./ControlIndecators/ControlIndecators";
import SideContainer from "./SideContainer";

interface Props {
  children?: Array<ReactElement>;
}

const NikaCarousel: React.FC<Props> = (props: Props): ReactElement => {
  return <Container>
    <SideContainer direction = "left"></SideContainer>
    <Column width="100%">
    <Row justifyContent="center" style={{height: '10%', width: '100%'}}>
          <ControlIndecators
           
          ></ControlIndecators>
    </Row>
    <Row justifyContent="center" style={{height: '90%', width: '100%'}}>
    {props.children}
        </Row>
  
    </Column>
    <SideContainer direction = "right"></SideContainer>
    </Container>;
};

export default NikaCarousel;
