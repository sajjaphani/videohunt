import React from 'react'
import { Comment } from 'semantic-ui-react'

export default class Actions extends React.PureComponent {

    likeHandler = () => {
        const { hasLiked, commentId } = this.props
        this.props.toggleLike(commentId, hasLiked)
    }

    replyHandler = () => {
        const { commentId, isShowReplies } = this.props
        this.props.toggleReply(commentId, isShowReplies)
    }

    render() {
        const hidden = this.props.hidden ? this.props.hidden : false
        const { hasLiked } = this.props
        if (hidden) {
            return null
        }
        let likeText = 'Like'
        if (hasLiked) {
            likeText = 'Liked'
        }
        return (
            <Comment.Actions>
                <Comment.Action onClick={this.likeHandler}>
                    {likeText}
                </Comment.Action>
                <Comment.Action onClick={this.replyHandler}>
                    Reply
                </Comment.Action>
            </Comment.Actions>
        )
    }
}
