import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className="fs-4">
            <Link to="/"> Labs </Link> |
            <Link to="/hello"> Hello </Link> |
            <Link to="/tuiter"> Tuiter </Link>
        </div>
    )
}

export default Nav;