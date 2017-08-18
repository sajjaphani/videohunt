import React from 'react'
import { Comment } from 'semantic-ui-react'

const Replies = (props) => {
    const {hidden, children} = props
    if (hidden || children.length == 0) {
        return null
    }
    return (
        <Comment.Group collapsed={hidden} threaded size='small' >
            {children}
        </Comment.Group>
    )
}

export default Replies