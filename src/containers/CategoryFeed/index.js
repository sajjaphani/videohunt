import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CategoryFeed from '../../components/CategoryFeed'
import { getPostIds, getPagination, getInitializing, getFeedName, getFeedImage } from './selectors'
import * as actions from '../Feed/actions'

const mapStateToProps = (state, props) => {
    return {
        feed: props.feed,
        feedName: getFeedName(state, props),
        feedImage: getFeedImage(state, props),
        postIds: getPostIds(state, props),
        nextPage: getPagination(state, props),
        initializing: getInitializing(state, props)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFeed)
