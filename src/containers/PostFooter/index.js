import React from 'react'
import { connect } from 'react-redux'

import PostFooter from '../../components/PostFooter'
import { getLikes, getComments } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        visible: ownProps.visible,
        postId: ownProps.postId,
        likes: getLikes(state, ownProps),
        comments: getComments(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(PostFooter)