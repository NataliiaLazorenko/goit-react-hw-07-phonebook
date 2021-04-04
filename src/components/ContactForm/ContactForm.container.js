import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onFormSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
