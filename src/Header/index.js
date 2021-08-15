import { HeaderCaption, HeaderContainer, HeaderImage, HeaderParagraph, HeaderTitle } from "./styled";
import { Button } from "../Button";
import photo from "../portrait.jpg";

const Header = () => (
    <HeaderContainer>
        <div>
            <HeaderImage src={photo} alt="portrait" />
        </div>
        <div>
            <HeaderCaption>THIS IS:</HeaderCaption>
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