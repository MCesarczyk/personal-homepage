import { StyledSection, SectionHeader, SectionList, SectionListItemImage, SectionListItem } from "./styled";
import circle from "../../assets/images/listStyleCircle.svg";

const Section = ({ title, elements }) => (
    <StyledSection >
        <SectionHeader >
            {title}
        </SectionHeader>
        <SectionList >
            {elements.map((element) => (
                    <SectionListItem key={element}>
                        <SectionListItemImage src={circle} />
                        {element}
                    </SectionListItem>
            ))}
        </SectionList>
    </StyledSection>
);

export default Section;