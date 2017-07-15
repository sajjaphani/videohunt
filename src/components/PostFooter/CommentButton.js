import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const PostComment = props => {
    const commentCount = props.comments.length > 0 ? ' | ' + props.comments.length : ''
    return (
    <Button basic size='tiny' onClick={props.toggleComment}>
        <Icon name='comment' />
        Comments {commentCount}
    </Button>
)
}

export default PostComment