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
            {children}  
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