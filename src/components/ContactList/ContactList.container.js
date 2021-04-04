import { connect } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: selectors.getContactsToShow(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(operations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
