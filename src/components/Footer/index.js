import { FooterContainer, FooterHeader, FooterLink, FooterParagraph, FooterThumbnail, FooterThumbnailLink, FooterThumbnailWrapper } from "./styled";
import { ReactComponent as GithubThumbnail } from "../../images/githubThumbnail.svg";
import { ReactComponent as FacebookThumbnail } from "../../images/facebookThumbnail.svg";
import { ReactComponent as LinkedinThumbnail } from "../../images/linkedinThumbnail.svg";
import { ReactComponent as InstagramThumbnail } from "../../images/instagramThumbnail.svg";
import { Caption } from "../../common/Caption";

const Footer = () => (
    <FooterContainer>
        <FooterHeader>
            <Caption>
                CONTACT:
            </Caption>
            <FooterLink id="contact" href="mailto:michal.cesarczyk@gmail.com">
                michal.cesarczyk@gmail.com
            </FooterLink>
        </FooterHeader>
        <FooterParagraph>
            I'm open to new challenging tasks, so when you need website or one page application to launch, feel free to talk to me.
        </FooterParagraph>
        <FooterThumbnailWrapper>
            <FooterThumbnail>
                <FooterThumbnailLink href="https://github.com/MCesarczyk" target="_blank" >
                    <GithubThumbnail />
                </FooterThumbnailLink>
            </FooterThumbnail>
            <FooterThumbnail>
                <FooterThumbnailLink href="https://www.facebook.com/mich.cesarz/" target="_blank" >
                    <FacebookThumbnail />
                </FooterThumbnailLink>
            </FooterThumbnail>
            <FooterThumbnail>
                <FooterThumbnailLink href="https://www.linkedin.com/in/micha%C5%82-cesarczyk-0820589a/" target="_blank" >
                    <LinkedinThumbnail />
                </FooterThumbnailLink>
            </FooterThumbnail>
            <FooterThumbnail>
                <FooterThumbnailLink href="https://www.instagram.com/mich_cesarz/" target="_blank" >
                    <InstagramThumbnail />
                </FooterThumbnailLink>
            </FooterThumbnail>
        </FooterThumbnailWrapper>
        {/* {thumbnails.map(({ id, thumbnail, url }) => {
                <FooterThumbnailWrapper key={id}>
                    {thumbnail}
                    <a href={url} target="_blank" rel="noopener noreferrer" />
                </FooterThumbnailWrapper>
            })} */}
    </FooterContainer>
);

export default Footer;