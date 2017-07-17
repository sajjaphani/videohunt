import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class LikeButton extends React.PureComponent {
    handleClick = (e) => {
        const { postId, liked } = this.props
        this.props.togglePost(postId, !liked)
    }
    render() {
        const { likes, liked } = this.props
        const likeCount = likes.length > 0 ? ' | ' + likes.length : ''
        const color = liked ? 'blue' : 'grey'
        return (
            <Button basic color={color} size='tiny' onClick={this.handleClick}>
                <Icon name='like' />
                Like {likeCount}
            </Button>
        )
    }
}