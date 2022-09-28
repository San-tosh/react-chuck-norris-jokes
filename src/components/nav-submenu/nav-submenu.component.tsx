import {Container, Line, MenuItem, Image} from "./nav-submenu.styles";
import {Link} from "react-router-dom";
import PathIcon from "../../assets/icons/path_2.png";

const NavSubmenu = ({isOpen}: {isOpen: boolean})=> {
    return (
        <>
        <Container isOpen={isOpen}>
            <Image src={PathIcon} alt="icon"/>
            <MenuItem>
                <Link to='#'>My published jokes</Link>
            </MenuItem>
            <Line/>
            <MenuItem>
                <Link to='#'>My saved jokes</Link>
            </MenuItem>
            <Line/>
            <MenuItem>
                <Link to='#'>Account Information</Link>
            </MenuItem>
            <Line/>
            <MenuItem>
                <Link to='#'>Publish new joke</Link>
            </MenuItem>
        </Container>
        </>
    )
}

export default NavSubmenu;