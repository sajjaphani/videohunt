import React from 'react'
import { Comment } from 'semantic-ui-react'

const CommentItem = (props) => {
    const { userName, commentText } = props
    return (
        <Comment>
            <Comment.Avatar src='/images/man1.png' />
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

export default CommentItem