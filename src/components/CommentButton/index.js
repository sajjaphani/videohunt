import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class CommentButton extends React.Component {
    handleClick = (e) => {
        const { postId, toggleComment, expandComments } = this.props
        const expand = expandComments ? !expandComments : true
        toggleComment(postId, expand)
    }
    render() {
        const { comments } = this.props
        const commentCount = comments.length > 0 ? ' | ' + comments.length : ''
        return (
            <Button basic size='tiny' onClick={this.handleClick}>
                <Icon name='comment' />
                Comments {commentCount}
            </Button>
        )
    }
}