import { connect } from 'react-redux';
// import contactsActions from '../../redux/contacts/contacts-actions';
import operations from '../../redux/contacts/contacts-operations';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onFormSubmit: (name, number) => dispatch(operations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
