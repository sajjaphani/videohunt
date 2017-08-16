import React from 'react'
import { Comment } from 'semantic-ui-react'
import moment from 'moment'

import Form from './Form'
import Section from './Section'
import Emojify from 'react-emojione'

const CommentItem = (props) => {
    const { userName, commentText, commentedOn, userPicture } = props
    return (
        <Comment>
            <Comment.Avatar src={userPicture} />
            <Comment.Content>
                <Comment.Author as='a'>{userName}</Comment.Author>
                <Comment.Metadata>
                    {moment(commentedOn).calendar()}
                </Comment.Metadata>
                <Comment.Text>
                    <Emojify>
                        {commentText}
                    </Emojify>
                </Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Like (2)</Comment.Action>
                    <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

CommentItem.Form = Form
CommentItem.Section = Section

export default CommentItem