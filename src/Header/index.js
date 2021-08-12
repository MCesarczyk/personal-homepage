import { HeaderContainer, HeaderImageContainer, HeaderTitle } from "./styled";
import photo from "../portrait.jpg";

const Header = ({ title }) => (
    <HeaderContainer>
        <HeaderImageContainer>
            <img src={photo} height="400px" />
        </HeaderImageContainer>
        <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
);

export default Header;