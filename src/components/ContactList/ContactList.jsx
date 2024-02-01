import { useDispatch, useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';
import { deleteContacts } from '../../redux/contacts/operations';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  
  

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onClickDelBtn={() => dispatch(deleteContacts(contact.id))}
        />
      ))}
    </ul>
  );
};