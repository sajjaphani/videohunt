import React from 'react'

import Comment from '../Comment'
import CommentContainer from '../../containers/Comment'
import CommentFormContainer from '../../containers/CommentForm'

export default class CommentsSectionContainer extends React.PureComponent {
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