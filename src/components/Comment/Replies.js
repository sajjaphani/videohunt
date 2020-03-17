import React from 'react'
import { Comment } from 'semantic-ui-react'

const Replies = (props) => {
    const { hidden, children } = props
    if (hidden) {
        return null
    }

    const replyGroupStyle = { marginLeft: '3em' };

    return (
        <Comment.Group style={replyGroupStyle} collapsed={hidden} size='mini' >
            {children}
        </Comment.Group>
    )
}

export default Replies