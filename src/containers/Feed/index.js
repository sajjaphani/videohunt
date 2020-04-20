import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Feed from '../../components/Feed'
import * as actions from './actions'
import { getFeed, getPagination } from './selector'

function mapStateToProps(state, props) {
    return {
        feed: getFeed(state, props),
        nextPage: getPagination(state, props),
        category: props.category
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);