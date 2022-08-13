import React, {ReactElement} from 'react';
import Container from './Container';
import LabelText from './LabelText';
import Row from '../Common/Row';

/*interface NavbarProps {
    changeTheme: Function;
  }*/

const TopMenu: React.FC = (): ReactElement => {
    return (
        <Container>
          <LabelText>Animation and visualization of data structure</LabelText>
          <Row justifyContent="space-between" margin="0 18px">
           
          </Row>
        </Container>
      );

};

export default TopMenu;
