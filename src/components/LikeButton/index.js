import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class LikeButton extends React.PureComponent {
    handleClick = (e) => {
        const { postId, liked } = this.props
        this.props.togglePost(postId, !liked)
    }
    render() {
        const { likesCount, liked } = this.props
        const numOflikes = likesCount > 0 ? ' | ' + likesCount : ''
        const color = liked ? 'blue' : 'grey'
        return (
            <Button basic color={color} size='tiny' onClick={this.handleClick}>
                <Icon name='like' />
                Like {numOflikes}
            </Button>
        )
    }
}