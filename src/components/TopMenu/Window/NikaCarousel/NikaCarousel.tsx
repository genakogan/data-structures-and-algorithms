import { ReactElement } from "react";
import Column from "./Column";
import Container from "./Container";
import SideContainer from "./SideContainer";

interface Props {
  children?: Array<ReactElement>;
}

const NikaCarousel: React.FC<Props> = (props: Props): ReactElement => {
  return <Container>
    <SideContainer direction = "left"></SideContainer>
    <Column width="100%">
    {props.children}
    </Column>
    <SideContainer direction = "right"></SideContainer>
    </Container>;
};

export default NikaCarousel;
