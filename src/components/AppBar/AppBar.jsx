import { useAuth } from "../../hooks";
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from "../AuthNav/AuthNav";
import css from './AppBar.module.css'

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}

export default AppBar;