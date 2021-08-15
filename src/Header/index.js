import { HeaderContainer, HeaderImage, HeaderParagraph, HeaderTitle } from "./styled";
import { Caption } from "../Caption";
import { Button } from "../Button";
import photo from "../portrait.jpg";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => (
    <HeaderContainer>
        <div>
            <HeaderImage src={photo} alt="portrait" />
        </div>
        <div>
        <ThemeSwitcher />
            <Caption>THIS IS:</Caption>
            <HeaderTitle>Michał Cesarczyk</HeaderTitle>
            <HeaderParagraph>
                Experienced mechanical engineer and CNC programmer who's just becoming a frontend developer.
            </HeaderParagraph>
            <Button>
                ✉ Contact
            </Button>
        </div>
    </HeaderContainer>
);

export default Header;