import React from 'react'
import { Comment } from 'semantic-ui-react'

import Form from './Form'
import Section from './Section'

const CommentItem = (props) => {
    const { userName, commentText, userPicture } = props
    return (
        <Comment>
            <Comment.Avatar src={userPicture} />
            <Comment.Content>
                <Comment.Author as='a'>{userName}</Comment.Author>
                <Comment.Metadata>
                    <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>
                    {commentText}
                </Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

CommentItem.Form = Form
CommentItem.Section = Section

export default CommentItem