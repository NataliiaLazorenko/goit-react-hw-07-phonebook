import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import ContactList from './ContactList';

const contactsToShow = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contacts: contactsToShow(items, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId =>
    dispatch(contactsActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
