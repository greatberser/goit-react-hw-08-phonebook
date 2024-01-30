import css from './Contact.module.css'

export const Contact = ({contact: {name, phone}, onClickDelBtn}) => {
    return (
        <li className={css.contactLine}>
            <span className={css.contactName}>{`${name}`}</span>
            <span className={css.contactNumber}>{`${phone}`}</span>
            <button className={css.contactDelete} type="button" onClick={onClickDelBtn}>
                Delete
            </button>
        </li>
    )
}

export default Contact;