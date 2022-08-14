import React, { ReactElement } from "react";
import Container from "./Container";

import Row from "../Common/Row";
import Titles from "../Common/Titles";

/*interface NavbarProps {
    changeTheme: Function;
  }*/

const TopMenu: React.FC = (): ReactElement => {
  return (
    <Container>
      <Titles fontSize="24px" underline="" cursor="">
        Animation and visualization of data structure
      </Titles>
      <Row justifyContent="space-between" margin="0 24px">
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
        >
          Help
        </Titles>
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
        >
          Team
        </Titles>
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
        >
          About
        </Titles>
      </Row>
    </Container>
  );
};

export default TopMenu;
