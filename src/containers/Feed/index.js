import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Feed from '../../components/Feed'
import * as actions from './actions'
import { getFeed, getPagination } from './selector'

function mapStateToProps(state, ownProps) {
    return {
        feed: getFeed(state, ownProps),
        nextPage: getPagination(state, ownProps),
        category: ownProps.category
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);