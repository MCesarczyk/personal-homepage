import { HeaderButtonIcon, HeaderContainer, HeaderImage, HeaderParagraph, HeaderTitle } from "./styled";
import { Caption } from "../../common/Caption";
import { Button } from "../../common/Button";
import photo from "../../assets/images/portrait.png";
import { ReactComponent as EnvelopeIcon } from "../../assets/images/envelopeIcon.svg";

const Header = () => (
    <HeaderContainer>
        <div>
            <HeaderImage src={photo} alt="portrait" />
        </div>
        <div>
            <Caption>THIS IS:</Caption>
            <HeaderTitle>Michał Cesarczyk</HeaderTitle>
            <HeaderParagraph>
                Experienced mechanical engineer and CNC programmer who's just becoming a frontend developer.
            </HeaderParagraph>
            <Button href="#contact">
                <HeaderButtonIcon>
                    <EnvelopeIcon width="100%" />
                </HeaderButtonIcon>
                Contact
            </Button>
        </div>
    </HeaderContainer>
);

export default Header;