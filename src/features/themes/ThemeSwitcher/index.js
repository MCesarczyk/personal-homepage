import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../themeSlice";
import { SwitcherButton, SwitcherButtonImage, SwitcherButtonWrapper, SwitcherCaption } from "./styled";
import light from "../../../assets/images/lightMode.svg";
import dark from "../../../assets/images/darkMode.svg";

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
                    {isThemeDark ? "DARK MODE ON" : "LIGHT MODE ON"}
                </SwitcherCaption>
                <SwitcherButtonImage
                    src={isThemeDark ? dark : light}
                />
            </SwitcherButton>
        </SwitcherButtonWrapper>
    )
};

export default ThemeSwitcher;