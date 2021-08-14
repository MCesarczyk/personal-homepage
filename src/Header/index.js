import { HeaderContainer, HeaderTitle } from "./styled";
import photo from "../portrait.jpg";

const Header = ({ title }) => (
    <HeaderContainer>
        <div>
            <img src={photo} alt="portrait" height="400px" />
        </div>
        <div>
            <HeaderTitle>{title}</HeaderTitle>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum autem placeat, eaque eos odit dignissimos enim nihil vero repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum autem placeat, eaque eos odit dignissimos enim nihil vero repellendus!
            </p>
            <button>
                Contact
            </button>
        </div>
    </HeaderContainer>
);

export default Header;