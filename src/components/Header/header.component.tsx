import classes from './header.module.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="`${classes.headerContainer}`">
            Hello{classes.headerContainer}
            <ul>
                <li>
                    <Link to="/page-one" >
                        PageOne
                    </Link>
                </li>
                <li>
                    <Link to="/page-two" >
                        PageTwo
                    </Link>
                </li>
                <li>
                    <Link to="/page-three" >
                        PageThree
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;