import React from 'react'

import Comment from '../Comment'
import CommentFormContainer from '../../containers/CommentForm'
import CommentsListContainer from '../../containers/CommentsList'

export default class CommentsSection extends React.PureComponent {

    render() {
        const { postId, expandComments, loggedIn } = this.props
        let commentForm = null
        if (loggedIn) {
            commentForm = (<CommentFormContainer postId={postId} />)
        }
        return (
            <Comment.Section expandComments={expandComments}>
                {commentForm}
                <CommentsListContainer postId={postId} />
            </Comment.Section>
        )
    }

}