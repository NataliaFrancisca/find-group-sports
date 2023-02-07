import { NavLink } from "react-router-dom"

import { useAuthValue  } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

import styles from "./NavBar.module.css";

const NavBar = () => {

    const { logout } = useAuthentication();
    const { user } = useAuthValue();

    return(
        <menu className={styles.menu}>
            <nav>
                <NavLink to="/">Home</NavLink>
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

                    {user && 
                    <NavLink onClick={logout} role="button">Sair</NavLink>
                  }
                </ul>
            </nav>
        </menu>
    )
}

export default NavBar;