import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './LikeButton.css';

export default class LikeButton extends React.PureComponent {

    handleClick = (e) => {
        const { postId, liked, isLoggedIn } = this.props
        this.props.toggleLike(postId, !liked, isLoggedIn)
    }

    render() {
        const { liked, likesCount } = this.props
        const numOflikes = likesCount > 0 ? ' ' + likesCount : ''
        const _class = liked ? 'liked' : 'not-liked';

        return (
            <Button basic className={_class} onClick={this.handleClick}>
                <Icon name='thumbs up outline' />
                {numOflikes}
            </Button>
        )
    }
}