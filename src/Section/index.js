import { SectionContainer, SectionHeader, List } from "./styled";

const Section = ({ title, elements }) => (
    <SectionContainer>
        <SectionHeader>
            {title}
        </SectionHeader>
        <List>
            {elements.map(element => (
                <li key={element} >
                    {element}
                </li>
            ))}
        </List>
    </SectionContainer>
);

export default Section;