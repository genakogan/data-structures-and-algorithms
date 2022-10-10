import React, {ReactElement,useState} from 'react';
import Track from './Track';
import Thumb from './Thumb';
import themes from '../../../../themes';
import Theme from '../../../../models/Theme';
import ToolTip from '../../../Common/ToolTip';

interface ThemeSwitchProps {
  changeTheme: Function;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = (
  props: ThemeSwitchProps
): ReactElement => {
  const handleChangeTheme = () => {
    props.changeTheme((prev: Theme) =>
      prev.name === 'dark' ? themes.light : themes.dark
    );
  };
  const [isToolTipVisible, setIsToolTipVisible] = useState<boolean>(false);
  return (
    <Track onClick={() => handleChangeTheme()}
      onMouseEnter={() => setIsToolTipVisible(true)}
      onMouseLeave={() => setIsToolTipVisible(false)}>
         <ToolTip top="40px" left="none" isVisible={isToolTipVisible}>
        {'Theme switch'}
      </ToolTip>
      <Thumb></Thumb>
    </Track>
  );
};

export default ThemeSwitch;
