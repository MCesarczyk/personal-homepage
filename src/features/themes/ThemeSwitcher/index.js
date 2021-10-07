import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../themeSlice";
import { 
    SwitcherButton, 
    SwitcherButtonWrapper, 
    SwitcherCaption, 
    SwitcherIcon, 
    SwitcherIconWrapper 
} from "./styled";
import { ReactComponent as SunIcon } from "../../../assets/images/sun.svg";

const ThemeSwitcher = () => {
    const isThemeDark = useSelector(selectTheme);

    const dispatch = useDispatch();

    const onThemeSwitch = () => {
        dispatch(setTheme(!isThemeDark));
    };

    return (
        <SwitcherButtonWrapper>
            <SwitcherButton onClick={onThemeSwitch}>
                <SwitcherCaption>
                    {`${isThemeDark ? "DARK" : "LIGHT"}`}&nbsp;MODE&nbsp;ON
                </SwitcherCaption>
                <SwitcherIconWrapper >
                    <SwitcherIcon shifted={isThemeDark}>
                        <SunIcon />
                    </SwitcherIcon>
                </SwitcherIconWrapper>
            </SwitcherButton>
        </SwitcherButtonWrapper>
    )
};

export default ThemeSwitcher;