import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const PostItemComment = props => (
    <Button basic size='tiny'>
        <Icon name='comment' />
        Comments | {props.comments}
    </Button>
)

export default PostItemComment