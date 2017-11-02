import React from 'react'
import { connect } from 'react-redux'
import DayFeedPosts from '../../components/DayFeedPosts'
import { getPostIds } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        postIds: getPostIds(state, ownProps) 
    }
}

export default connect(mapStateToProps, {

})(DayFeedPosts)

