import { NavLink } from "react-router-dom"

import { useAuthValue  } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

import "./NavBarStyle.css";

const NavBar = () => {

    const { logout } = useAuthentication();
    const { user } = useAuthValue();

    return(
        <menu>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <ul>
                    <NavLink to="/groups">Grupos</NavLink>

                    {!user && (
                        <>
                            <NavLink to="/register">Registro</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                    )}

                    {user && (
                        <>
                            <NavLink to="/group/create">Criar Grupo</NavLink>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </>
                    )}

                    {user && <button onClick={logout}>Sair</button>}
                </ul>
            </nav>
        </menu>
    )
}

export default NavBar;