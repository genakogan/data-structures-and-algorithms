import styled from 'styled-components';
import themes from '../../../themes';

interface Props{
  width: string;
}

const Container = styled.div.attrs((props: Props)=>({
  width: props.width,
}))`
  user-select: none;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  width: ${(props) => props.width};
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
  cursor: pointer;
  transition-duration: 0.5s;
  transition-property: background-color;
`;

export default Container;
