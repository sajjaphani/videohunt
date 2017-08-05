import React from 'react'
import { connect } from 'react-redux'

import Post from '../../components/Post'
import { getLikes, getComments } from './selectors'
import PostFooter from '../../components/PostFooter'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        likes: getLikes(state, ownProps),
        comments: getComments(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(PostFooter)