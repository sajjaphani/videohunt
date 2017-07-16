import React from 'react'
import { Button, Comment, Form, Header, Divider, Image } from 'semantic-ui-react'

import CommentContainer from '../../containers/Comment'

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
    console.log('Log in state',loggedIn)
    if (loggedIn) {
        commentForm = (
            <Form reply size='mini'>
                <Form.Group >
                    {/*<Image src='/images/boy.png' size='tiny'  width='2' circular/>*/}
                    {/*<Button icon='checkmark' size='mini' basic color='blue' width='1'/>*/}
                    <Form.Input name='comment' placeholder='Add a comment...' width='15' />
                    <Button icon='checkmark' size='mini' basic color='blue' width='1' />
                    {/*<Form.Button content='Reply' basic color='blue' />*/}
                </Form.Group>
            </Form>
        )
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