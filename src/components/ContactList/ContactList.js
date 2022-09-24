import { ContactListItem } from './ContactListItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

const getVisibleContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getVisibleContacts(items, filter);
  return (
    <ul className={s.list}>
      {contacts.length ? (
        contacts.map(({ name, number, id }) => (
          <ContactListItem key={id} name={name} number={number} id={id} />
        ))
      ) : (
        <p className={s.text}>The list is empty</p>
      )}
    </ul>
  );
};
