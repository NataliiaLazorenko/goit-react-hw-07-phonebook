import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:8080';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(actions.fetchContactsSuccess(data));
  } catch ({ message }) {
    dispatch(actions.fetchContactsError(message));
  }
};

const addContact = ({ name, number }) => async dispatch => {
  const contact = { name, number };
  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(actions.addContactSuccess(data));
  } catch ({ message }) {
    dispatch(actions.addContactError(message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    axios.delete(`/contacts/${contactId}`);

    dispatch(actions.deleteContactSuccess(contactId));
  } catch ({ message }) {
    dispatch(actions.deleteContactError(message));
  }
};

const operations = { fetchContacts, addContact, deleteContact };

export default operations;

// const fetchContacts = () => dispatch => {
//   dispatch(actions.fetchContactsRequest());

//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
// .catch(({ message }) => dispatch(actions.fetchContactsError(message)));
// };

// const addContact = ({ name, number }) => dispatch => {
//   const contact = { name, number };

//   dispatch(actions.addContactRequest());

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(actions.addContactSuccess(data)))
//     .catch(({ message }) => dispatch(actions.addContactError(message)));
// };

// const deleteContact = contactId => dispatch => {
//   dispatch(actions.deleteContactRequest());

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(actions.deleteContactSuccess(contactId)))
//     .catch(({ message }) => dispatch(actions.deleteContactError(message)));
// };
