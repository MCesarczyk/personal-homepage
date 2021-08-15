import { GalleryContainer, GalleryHeader } from "./styled"

const Section = ({ title, subtitle, body }) => (
    <GalleryContainer>
        <img alt="" />
        <GalleryHeader>
            {title}
        </GalleryHeader>
        <p>
            {subtitle}
        </p>
        <div>
            {body}
        </div>
    </GalleryContainer>
);

export default Section;