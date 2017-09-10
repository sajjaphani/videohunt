import React from 'react'

import Comment from '../Comment'
import CommentsListContainer from '../../containers/CommentsList'
import CommentFormContainer from '../../containers/CommentForm'

export default class CommentItem extends React.PureComponent {

    render() {
        const { postId, totalReplies, commentId, isShowReplyForm, isShowReplies, isLoggedIn, hasLiked, isRepliesLoading, replies } = this.props
        const { toggleReply, showReplies, toggleLike } = this.props.actions
        let repliesList = null
        if (isShowReplies) {
            repliesList = <CommentsListContainer key={commentId} postId={postId} commentId={commentId} />
        }
        return (
            <Comment>
                <Comment.Avatar userPicture={this.props.userPicture} />
                <Comment.Content {...this.props}>
                    <Comment.Actions
                        hasLiked={hasLiked}
                        toggleLike={toggleLike}
                        toggleReply={toggleReply}
                        commentId={commentId}
                        hidden={!isLoggedIn}
                        isShowReplies={isShowReplies} />
                    <CommentFormContainer commentId={commentId} hidden={!isShowReplyForm} />
                    <Comment.RepliesSummary commentId={commentId}
                        showReplies={showReplies}
                        totalReplies={totalReplies}
                        loading={isRepliesLoading}
                        hidden={isShowReplies && replies.length > 0} />
                </Comment.Content>
                <Comment.Replies hidden={!isShowReplies || totalReplies == 0}>
                    {repliesList}
                </Comment.Replies>
            </Comment>
        )
    }

}