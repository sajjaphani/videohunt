import React from 'react'
import { Comment } from 'semantic-ui-react'

const Avatar = (props) => (
    <Comment.Avatar className="round-avatar" src={props.userPicture} />
)

export default Avatar