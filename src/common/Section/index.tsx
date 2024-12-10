import {
  StyledSection,
  SectionHeader,
  SectionList,
  SectionListItemImage,
  SectionListItem,
} from "./styled";
import circle from "../../assets/images/listStyleCircle.svg";

interface Props {
  title: string;
  elements: string[];
}

const Section = ({ title, elements }: Props) => (
  <StyledSection>
    <SectionHeader>{title}</SectionHeader>
    <SectionList>
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
