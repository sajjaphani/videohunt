import React from 'react'
import { connect } from 'react-redux'
import Comment from '../../components/Comment'
import CommentContainer from '../Comment'
import CommentFormContainer from '../CommentForm'
import { isExpandComments, isLoggedIn } from './selectors'

class CommentsSectionContainer extends React.PureComponent {
    render() {
        const { postId, expandComments, comments, loggedIn } = this.props
        const commentItems = computePostComments(comments, postId)
        let commentForm = <div/>
        if (loggedIn) {
            commentForm = (<CommentFormContainer postId={postId} />)
        }
        return (
            <Comment.Section expandComments={expandComments}>
                {commentForm} 
                {commentItems}
            </Comment.Section>
        )
    }
}

const computePostComments = (comments, postId) => (
    comments.map((commentId) => {
        return (
            <CommentContainer key={commentId} postId={postId} commentId={commentId} />
        )
    })
)

const mapStateToProps = (state, ownProps) => {
    const { postId, expandComments, comments } = ownProps
    return {
        postId: ownProps.postId,
        expandComments: isExpandComments(state, ownProps),
        comments: comments,
        loggedIn: isLoggedIn(state)
    }
}

export default connect(mapStateToProps, {

})(CommentsSectionContainer)