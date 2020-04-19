import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CategoryFeed from '../../components/CategoryFeed'
import { getPostIds, getPagination, getInitializing, getFeedName, getFeedImage } from './selectors'
import * as actions from '../Feed/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        feed: ownProps.feed,
        feedName: getFeedName(state, ownProps),
        feedImage: getFeedImage(state, ownProps),
        postIds: getPostIds(state, ownProps),
        nextPage: getPagination(state, ownProps),
        initializing: getInitializing(state, ownProps)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFeed)
