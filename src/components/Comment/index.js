import React from 'react'
import { Comment } from 'semantic-ui-react'

const CommentItem = (props) => {
    const {user, comment} = props
    return (
        <Comment>
            <Comment.Avatar src='/images/man1.png' />
            <Comment.Content>
                <Comment.Author as='a'>{user.name}</Comment.Author>
                <Comment.Metadata>
                    <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>
                    {comment.text}
                        </Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

export default CommentItem