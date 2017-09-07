import React from 'react'

import Comment from '../Comment'
import CommentContainer from '../../containers/Comment'
import CommentFormContainer from '../../containers/CommentForm'

export default class CommentsList extends React.PureComponent {

    computePostComments = (commentIds, postId) => (
        commentIds.map((commentId) => {
            return (
                <CommentContainer key={commentId} postId={postId} commentId={commentId} />
            )
        })
    )

    componentDidMount() {
        const { hasMore, nextPageUrl, postId, actions } = this.props
        if (hasMore) {
            actions.loadPostComments(postId, nextPageUrl)
        }
    }

    render() {
        const { commentIds, postId } = this.props
        const comments = this.computePostComments(commentIds, postId)
        return (
            <div>
                {comments}
            </div>
        )
    }

}