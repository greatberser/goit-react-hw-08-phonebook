import { useDispatch } from "react-redux";
import { logOut } from '../../redux/auth/operations.js';
import { useAuth } from "../../hooks";
import css from './UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.wrapper}>
            <p className={css.userName}>{user.name}</p>
            <button className={css.btnLogOut} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
}