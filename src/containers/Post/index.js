import React from 'react'
import { connect } from 'react-redux'
import { getPostId, getTitle, getAuthor, getURL, getCategory, getProvider } from './selectors'
import PostItem from '../../components/PostItem'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        expandComments: ownProps.expandComments,
        title: getTitle(state, ownProps),
        author: getAuthor(state, ownProps),
        url: getURL(state, ownProps),
        category: getCategory(state, ownProps),
        provider: getProvider(state, ownProps),
    }
}

export default connect(mapStateToProps, {

})(PostItem)