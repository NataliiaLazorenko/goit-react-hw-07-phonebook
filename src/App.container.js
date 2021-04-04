import { connect } from 'react-redux';
import { operations, selectors } from './redux/contacts';
import App from './App';

const mapStateToProps = state => ({
  isLoading: selectors.getIsLoading(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
