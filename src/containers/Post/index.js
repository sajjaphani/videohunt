import React from 'react'
import { connect } from 'react-redux'
import { getPostId, getTitle, getSubtitle, getURL } from './selectors'
import PostItem from '../../components/PostItem'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        title: getTitle(state, ownProps),
        subtitle: getSubtitle(state, ownProps),
        url: getURL(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(PostItem)