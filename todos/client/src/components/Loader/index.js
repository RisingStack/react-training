import { connect } from 'react-redux';
import View from './View';

function mapState(state) {
  return {
    isLoading: state.isLoading
  };
}

export default connect(mapState)(View);
