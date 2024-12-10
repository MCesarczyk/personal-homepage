import {
  HeaderButtonIcon,
  HeaderContainer,
  HeaderImage,
  HeaderParagraph,
  HeaderTitle,
} from "./styled";
import { Caption } from "../../common/Caption";
import { Button } from "../../common/Button";
import photo from "../../assets/images/portrait.png";
import { ReactComponent as EnvelopeIcon } from "../../assets/images/envelopeIcon.svg";

const Header = () => (
  <HeaderContainer>
    <div>
      <HeaderImage src={photo} alt="portrait" />
    </div>
    <div>
      <Caption>THIS IS:</Caption>
      <HeaderTitle>Michał Cesarczyk</HeaderTitle>
      <HeaderParagraph>
        My name is Michał and I'm Typescript-React-based frontend developer.
        Currently I'm working a lot with geospatial functionalities, maps,
        remote sensing data. 🌍🪐🚀🗺. In free time I exercise with Node.js,
        Prisma, Nest, NX, PostgreSQL and learn about software architecture. If
        you want to check results of my work, feel free to check my public
        repositories 🔎
      </HeaderParagraph>
      <Button href="#contact">
        <HeaderButtonIcon>
          <EnvelopeIcon width="100%" />
        </HeaderButtonIcon>
        Contact
      </Button>
    </div>
  </HeaderContainer>
);

export default Header;
