import styled from 'styled-components';
import themes from '../../themes';


interface Props {
  isVisible: boolean;
  top: string;
  left: string;
}

const ToolTip = styled.div<Props>`
  z-index: 999;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  text-align: center;
  top:  ${(props) => props.top};
  left ${(props) => props.left};
  min-width: 80px;
  padding: 2px;
  font-size: 14px;
  border-radius: 6px;
  color: white;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
  transition-duration: 0.5s;

 
  &::after {
    content: ' ';
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -5px;
    border-width: ${(props) => (props.isVisible ? '10px' : '0px')};
    border-style: solid;
    border-color:  ${(props) =>
      props.theme.name === 'dark'
        ? themes.light.navbar.background
        : themes.dark.navbar.background} transparent  transparent
     
      transparent ;
      
  }
`;

export default ToolTip;
