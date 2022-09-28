import {Link} from "react-router-dom";
import PersonIcon from "../../assets/icons/shape.png";
import PathIcon from "../../assets/icons/path_2.png";
import {useState} from "react";
import Hamburger from "../hamburger/hamburger.component";
import {Container, HamburgerContainer, Wrapper} from "./header.styles";
import NavSubmenu from "../nav-submenu/nav-submenu.component";

const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    const toggleSubMenuOpen = () =>{
        setSubMenuOpen(!subMenuOpen)
    }

    return (
        <Container>
            <Wrapper hamburgerOpen={hamburgerOpen}>
                <li>
                    <Link to="#" >
                        SO FUNCKTIONERT'S
                    </Link>
                </li>
                <li>
                    <Link to="#" >
                        SONDERANGEBOTE
                    </Link>
                </li>
                <li onClick={toggleSubMenuOpen}>
                    <Link to="#" >
                        <img src={PersonIcon}  width='12px' height='12px' alt="icon"/>
                        <span>MEIN BERIECH</span>
                        <img src={PathIcon} width='12px' height='7px' alt="path icon"/>
                    </Link>
                    <NavSubmenu isOpen={subMenuOpen}/>
                </li>
            </Wrapper>
            <HamburgerContainer onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </HamburgerContainer>
        </Container>
    )
}

export default Header;