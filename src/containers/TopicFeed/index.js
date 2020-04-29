import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TopicFeed from '../../components/TopicFeed'
import { getPostIds, getPagination, getInitializing, getFeedName, getFeedImage } from './selectors'
import * as actions from '../Feed/actions'

const mapStateToProps = (state, props) => {
    console.log('state', state)
    return {
        topicId: props.topicId,
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

export default connect(mapStateToProps, mapDispatchToProps)(TopicFeed)
