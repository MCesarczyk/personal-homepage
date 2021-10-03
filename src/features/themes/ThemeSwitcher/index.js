import { SwitcherButton, SwitcherButtonImage, SwitcherCaption } from "./styled";
import light from "../../../images/lightMode.svg";
import dark from "../../../images/darkMode.svg";
import { lightMode } from "../../../theme";

const ThemeSwitcher = ({ theme, onClick }) => {
    return (
        <SwitcherButton onClick={onClick}>
            <SwitcherCaption>
                {theme === lightMode ? "LIGHT MODE ON" : "DARK MODE ON"}
            </SwitcherCaption>
            <SwitcherButtonImage
                src={theme === lightMode ? light : dark}
            />
        </SwitcherButton>
    )
};

export default ThemeSwitcher;