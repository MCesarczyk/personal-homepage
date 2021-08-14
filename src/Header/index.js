import { HeaderButton, HeaderCaption, HeaderContainer, HeaderImage, HeaderParagraph, HeaderTitle } from "./styled";
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
            <HeaderButton>
                ✉ Contact
            </HeaderButton>
        </div>
    </HeaderContainer>
);

export default Header;