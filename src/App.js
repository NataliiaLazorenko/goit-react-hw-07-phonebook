import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import ContactList from './components/ContactList';
import operations from './redux/contacts/contacts-operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />

        {isLoading && <Spinner />}
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.contacts.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
