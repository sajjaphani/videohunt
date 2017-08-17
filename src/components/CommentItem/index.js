import React from 'react'

import Comment from '../Comment'
import CommentContainer from '../../containers/Comment'

export default class CommentItem extends React.PureComponent {
    computeReplies = (replies) => replies.map(replyId => <CommentContainer key={replyId} commentId={replyId} /> )
    render() {
        const { totalReplies, commentId, isShowReplyForm, isShowReplies, replies } = this.props
        const { toggleReply, showReplies } = this.props.actions
        const repliesList = this.computeReplies(replies)
        return (
            <Comment>
                <Comment.Avatar userPicture={this.props.userPicture} />
                <Comment.Content {...this.props}>
                    <Comment.Actions toggleReply={toggleReply} commentId={commentId} />
                    <Comment.Form hidden={!isShowReplyForm} />
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