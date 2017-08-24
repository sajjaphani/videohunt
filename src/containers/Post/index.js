import React from 'react'
import { connect } from 'react-redux'
import { getPostId, getTitle, getSubtitle, getURL, getComments } from './selectors'
import PostItem from '../../components/PostItem'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        expandComments: ownProps.expandComments,
        title: getTitle(state, ownProps),
        subtitle: getSubtitle(state, ownProps),
        url: getURL(state, ownProps),
        comments: getComments(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(PostItem)