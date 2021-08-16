import { StyledSection, SectionHeader, SectionList, SectionListItemImage, SectionListItem } from "./styled";
import circle from "../../images/listStyleCircle.svg";

const Section = ({ title, elements }) => (
    <StyledSection>
        <SectionHeader>
            {title}
        </SectionHeader>
        <SectionList>
            {elements.map((element, index) => (
                <>
                    <SectionListItem key={index} >
                        <SectionListItemImage src={circle} />
                        {element}
                    </SectionListItem>
                </>
            ))}
        </SectionList>
    </StyledSection>
);

export default Section;