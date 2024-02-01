import { useDispatch } from "react-redux"
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css'

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
                <label className={css.label}>
                    Email
                    <input className={css.input} type="email" name="email" placeholder="example@gmail.com" />
                </label>

                <label className={css.label}>
                    Password
                    <input className={css.input} type="password" name="password" placeholder="Enter password" />
                </label>
                <button className={css.btnSubmit} type="sumbit">Log In</button>
            </form>
        </div>
    );
}