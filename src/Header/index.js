import { HeaderContainer, HeaderTitle } from "./styled";
import photo from "../portrait.jpg";

const Header = ({ title }) => (
    <HeaderContainer>
        <div>
            <img src={photo} height="400px" />
        </div>
        <div>
            <HeaderTitle>{title}</HeaderTitle>
            <p>
                Paragraph
            </p>
            <button>
                Contact
            </button>
        </div>
    </HeaderContainer>
);

export default Header;