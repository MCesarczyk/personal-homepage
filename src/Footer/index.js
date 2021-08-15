import { FooterContainer, FooterHeader, FooterLink, FooterLogo, FooterParagraph } from "./styled";
import { Caption } from "../Caption";
import github from "../githubThumbnail.svg";
import facebook from "../facebookThumbnail.svg";
import linkedin from "../linkedinThumbnail.svg";
import instagram from "../instagramThumbnail.svg";

const Footer = () => (
    <FooterContainer>
        <FooterHeader>
            <Caption>
                CONTACT:
            </Caption>
            <FooterLink href="mailto:michal.cesarczyk@gmail.com">
                michal.cesarczyk@gmail.com
            </FooterLink>
        </FooterHeader>
        <FooterParagraph>
            I'm open to new challenging tasks, so when you need website or one page application to launch, feel free to talk to me.
        </FooterParagraph>
        <div>
        <FooterLogo src={github}></FooterLogo>
        <FooterLogo src={facebook}></FooterLogo>
        <FooterLogo src={linkedin}></FooterLogo>
        <FooterLogo src={instagram}></FooterLogo>
        </div>
    </FooterContainer>
);

export default Footer;