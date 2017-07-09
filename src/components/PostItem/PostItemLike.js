import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const PostItemLike = props => (
    <Button basic color={'grey'} size='tiny'>
        <Icon name='like' />
        Like | {props.likes}
    </Button>
)

export default PostItemLike