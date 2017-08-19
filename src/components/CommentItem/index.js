import React from 'react'

import Comment from '../Comment'
import CommentContainer from '../../containers/Comment'
import CommentFormContainer from '../../containers/CommentForm'

export default class CommentItem extends React.PureComponent {
    computeReplies = (replies) => replies.map(replyId => <CommentContainer key={replyId} commentId={replyId} />)
    render() {
        const { totalReplies, commentId, isShowReplyForm, isShowReplies, replies, isLoggedIn, hasLiked } = this.props
        const { toggleReply, showReplies, toggleLike } = this.props.actions
        const repliesList = this.computeReplies(replies)
        return (
            <Comment>
                <Comment.Avatar userPicture={this.props.userPicture} />
                <Comment.Content {...this.props}>
                    <Comment.Actions
                        hasLiked={hasLiked}
                        toggleLike={toggleLike}
                        toggleReply={toggleReply}
                        commentId={commentId}
                        hidden={!isLoggedIn} />
                    <CommentFormContainer commentId={commentId} hidden={!isShowReplyForm} />
                    <Comment.RepliesSummary commentId={commentId}
                        showReplies={showReplies}
                        totalReplies={totalReplies}
                        hidden={isShowReplies} />
                </Comment.Content>
                <Comment.Replies hidden={!isShowReplies}>
                    {repliesList}
                </Comment.Replies>
            </Comment>
        )
    }
}