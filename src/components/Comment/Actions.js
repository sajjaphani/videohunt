import React from 'react'
import { Comment } from 'semantic-ui-react'

export default class Actions extends React.PureComponent {

    likeHandler = () => {
        console.log('like clicked')
    }

    replyHandler = () => {
        const { commentId } = this.props
        this.props.toggleReply(commentId)
    }

    render() {
        const hidden = this.props.hidden ? this.props.hidden : false
        if (hidden) {
            return null
        }
        return (
            <Comment.Actions>
                <Comment.Action onClick={this.likeHandler}>
                    Like
                </Comment.Action>
                <Comment.Action onClick={this.replyHandler}>
                    Reply
                </Comment.Action>
            </Comment.Actions>
        )
    }
}
