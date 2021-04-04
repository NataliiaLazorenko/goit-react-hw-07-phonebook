import { connect } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  items: selectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onFormSubmit: (name, number) => dispatch(operations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
