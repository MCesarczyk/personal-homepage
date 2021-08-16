import { SwitcherButton } from "./styled";

const ThemeSwitcher = ({ onClick }) => {
    return (
        <SwitcherButton onClick={onClick}>THEME</SwitcherButton>
    )
};

export default ThemeSwitcher;