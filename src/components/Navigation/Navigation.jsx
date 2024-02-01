import { useAuth } from "../../hooks";
import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className={css.navMenu}>
            <NavLink className={css.navLink} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={css.navLink} to="/Contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    )
}