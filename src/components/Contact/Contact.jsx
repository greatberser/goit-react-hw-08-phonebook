import css from './Contact.module.css'

export const Contact = ({contact: {name, number}, onClickDelBtn}) => {
    return (
        <li className={css.contactLine}>
            <span className={css.contactName}>{`${name}`}</span>
            <span className={css.contactNumber}>{`${number}`}</span>
            <button className={css.contactDelete} type="button" onClick={onClickDelBtn}>
                Delete
            </button>
        </li>
    )
}

export default Contact;