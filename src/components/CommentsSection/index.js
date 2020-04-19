import React from 'react'

import Comment from '../Comment'
import CommentFormContainer from '../../containers/CommentForm'
import CommentsListContainer from '../../containers/CommentsList'

export default class CommentsSection extends React.PureComponent {

    render() {
        const { postId, expandComments, loggedIn, currentUserId } = this.props;
        let commentForm = null
        if (loggedIn) {
            commentForm = (<CommentFormContainer showForm={true} postId={postId} currentUserId={currentUserId} />)
        }

        return (
            <Comment.Section expandComments={expandComments}>
                {commentForm}
                <CommentsListContainer isReply={false} postId={postId} loggedIn={loggedIn} />
            </Comment.Section>
        )
    }
}