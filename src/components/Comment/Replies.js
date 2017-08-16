import React from 'react'
import { Comment } from 'semantic-ui-react'

const Replies = (props) => {
    const {hidden, children} = props
    if (hidden) {
        return null
    }
    return (
        <Comment.Group collapsed={hidden} threaded>
            {children}
        </Comment.Group>
    )
}

export default Replies