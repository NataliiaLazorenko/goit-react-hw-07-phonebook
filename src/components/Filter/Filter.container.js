import { connect } from 'react-redux';
import { actions, selectors } from '../../redux/contacts';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
