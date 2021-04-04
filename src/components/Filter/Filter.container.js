import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsActions.filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
