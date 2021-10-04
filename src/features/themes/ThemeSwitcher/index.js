import { SwitcherButton, SwitcherButtonImage, SwitcherCaption } from "./styled";
import light from "../../../images/lightMode.svg";
import dark from "../../../images/darkMode.svg";
import { lightMode } from "../../../theme";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../themeSlice";

const ThemeSwitcher = () => {
    const isThemeDark = useSelector(selectTheme);

    const dispatch = useDispatch();

    const onThemeSwitch = () => {
        dispatch(setTheme(!isThemeDark));
    };

    return (
        <SwitcherButton onClick={onThemeSwitch}>
            <SwitcherCaption>
                {isThemeDark ? "DARK MODE ON" : "LIGHT MODE ON"}
            </SwitcherCaption>
            <SwitcherButtonImage
                src={isThemeDark ? dark : light}
            />
        </SwitcherButton>
    )
};

export default ThemeSwitcher;