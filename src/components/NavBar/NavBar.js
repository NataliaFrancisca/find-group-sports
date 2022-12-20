
import {NavLink} from "react-router-dom"

import "./NavBarStyle.css";

const NavBar = () => {
    return(
        <menu>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <ul>
                    <NavLink to="/feed">Grupos</NavLink>
                    <NavLink to="/register">Registro</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </ul>
            </nav>
        </menu>
    )
}

export default NavBar;