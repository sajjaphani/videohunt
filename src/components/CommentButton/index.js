import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './CommentButton.css';

export default class CommentButton extends React.PureComponent {
    handleClick = (e) => {
        const { postId, toggleComment, expandComments } = this.props
        const expand = expandComments ? !expandComments : true
        toggleComment(postId, expand)
    }

    render() {
        const { commentNo } = this.props
        const commentCount = commentNo > 0 ? ' ' + commentNo : ''
        return (
            <Button basic className="cmnts" onClick={this.handleClick}>
                <Icon name='comment outline' />
                {commentCount}
            </Button>
        )
    }
}