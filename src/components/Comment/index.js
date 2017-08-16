import React from 'react'
import { Comment } from 'semantic-ui-react'

import Form from './Form'
import Section from './Section'
import Actions from './Actions'
import Replies from './Replies'
import RepliesSummary from './RepliesSummary'
import Content from './Content'
import Avatar from './Avatar'

const CommentItem = (props) => {
    const { children } = props
    return (
        <Comment>
<<<<<<< nested-comments
            {children}  
=======
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
>>>>>>> Partial commit for handling post a video
        </Comment>
    )
}

CommentItem.Form = Form
CommentItem.Section = Section
CommentItem.Actions = Actions
CommentItem.Replies = Replies
CommentItem.Content = Content
CommentItem.Avatar = Avatar
CommentItem.RepliesSummary = RepliesSummary

export default CommentItem