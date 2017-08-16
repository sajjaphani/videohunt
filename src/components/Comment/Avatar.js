import React from 'react'
import { Comment } from 'semantic-ui-react'

const Avatar = (props) => (
    <Comment.Avatar src={props.userPicture} />
)

export default Avatar