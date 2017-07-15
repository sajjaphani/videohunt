import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const LikeButton = props => {
    const likeCount = props.likes.length > 0 ? ' | ' + props.likes.length : ''
    return (
        <Button basic color={'grey'} size='tiny'>
            <Icon name='like' />
            Like {likeCount}
        </Button>
    )
}

export default LikeButton