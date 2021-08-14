import { SectionContainer, SectionHeader } from "./styled"

const Section = ({ title, subtitle, body }) => (
    <SectionContainer>
        <img alt="" />
        <SectionHeader>
            {title}
        </SectionHeader>
        <p>
            {subtitle}
        </p>
        <div>
            {body}
        </div>
    </SectionContainer>
);

export default Section;