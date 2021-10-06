import {
    FooterContainer,
    FooterHeader,
    FooterLink,
    FooterParagraph,
    FooterThumbnail,
    FooterThumbnailLink,
    FooterThumbnailWrapper
} from "./styled";
import { Caption } from "../../common/Caption";
import { thumbnails } from "./thumbnails";
import { MAIL_ADRESS } from "../../assets/data/adresses";

const Footer = () => (
    <FooterContainer>
        <FooterHeader>
            <Caption>
                CONTACT:
            </Caption>
            <FooterLink id="contact" href={`mailto:${MAIL_ADRESS}`}>
                {MAIL_ADRESS}
            </FooterLink>
        </FooterHeader>
        <FooterParagraph>
            I'm open to new challenging tasks, so when you need website or one page application to launch, feel free to talk to me.
        </FooterParagraph>
        <FooterThumbnailWrapper>
            {thumbnails.map(({ id, thumbnail, url }) => (
                <FooterThumbnail key={id}>
                    <FooterThumbnailLink href={url} target="_blank" rel="noopener noreferrer" >
                        {thumbnail}
                    </FooterThumbnailLink>
                </FooterThumbnail>
            ))}
        </FooterThumbnailWrapper>
    </FooterContainer>
);

export default Footer;