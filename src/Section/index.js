import { SectionContainer, SectionHeader, List, ListItemImage, ListItem } from "./styled";
import circle from "../listStyleCircle.svg";

const Section = ({ title, elements }) => (
    <SectionContainer>
        <SectionHeader>
            {title}
        </SectionHeader>
        <List>
            {elements.map(element => (
                <>
                    <ListItem key={element} >
                        <ListItemImage src={circle} />
                        {element}
                    </ListItem>
                </>
            ))}
        </List>
    </SectionContainer>
);

export default Section;