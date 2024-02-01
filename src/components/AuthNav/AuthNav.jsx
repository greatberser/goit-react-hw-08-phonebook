import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css'

export const AuthNav = () => {
    return (
        <div className={css.wrapper}>
            <NavLink className={css.navLink} to="/Register">
                Register
            </NavLink>
            <NavLink className={css.navLink} to="/Login">
                Login
            </NavLink>
        </div>
    )
}