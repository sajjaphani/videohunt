import React from 'react'
import { Button, Comment, Form, Header, Divider, Image } from 'semantic-ui-react'

import CommentContainer from '../../containers/Comment'
import CommentFormContainer from '../../containers/CommentForm'


const CommentsSection = (props) => {
    const { postId, expandComments, comments, loggedIn } = props
    const divider = expandComments ? <Divider /> : <div />
    let postComments = []
    const commentItems = comments.map((commentId) => {
        return (
            <CommentContainer key={commentId} postId={postId} commentId={commentId} />
        )
    })
    let commentForm = <div />
    if (loggedIn) {
        commentForm = (<CommentFormContainer postId={postId} />)
    }
    return (<div>
        {divider}
        <Comment.Group collapsed={!expandComments} size='small'>
            <Header as='h3' dividing>Comments</Header>
            {commentForm}
            {commentItems}
        </Comment.Group>
    </div>)

}

export default CommentsSection