import { selectTheme, setTheme } from "../themeSlice";
import {
  SwitcherButton,
  SwitcherButtonWrapper,
  SwitcherCaption,
  SwitcherIcon,
  SwitcherIconWrapper,
} from "./styled";
import { ReactComponent as SunIcon } from "../../../assets/images/sun.svg";
import { useAppDispatch, useAppSelector } from "../../../hooks";

const ThemeSwitcher = () => {
  const isThemeDark = useAppSelector(selectTheme);

  const dispatch = useAppDispatch();

  const onThemeSwitch = () => {
    dispatch(setTheme(!isThemeDark));
  };

  return (
    <SwitcherButtonWrapper>
      <SwitcherButton onClick={onThemeSwitch}>
        <SwitcherCaption>
          {`${isThemeDark ? "DARK" : "LIGHT"}`}&nbsp;MODE&nbsp;ON
        </SwitcherCaption>
        <SwitcherIconWrapper>
          <SwitcherIcon shifted={isThemeDark || false}>
            <SunIcon />
          </SwitcherIcon>
        </SwitcherIconWrapper>
      </SwitcherButton>
    </SwitcherButtonWrapper>
  );
};

export default ThemeSwitcher;
