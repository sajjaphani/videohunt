import React from 'react'
import { Button, Comment, Form, Header, Divider } from 'semantic-ui-react'

const PostCommentSection = (props) => {
    const { expand } = props
    let divider = <div />
    if (expand) {
        divider = <Divider />
    }
    return (<div>
        {divider}
        <Comment.Group collapsed={!expand}>
            <Header as='h3' dividing>Comments</Header>
            <Form reply>
                <Form.Group >
                    <Form.Input name='comment' placeholder='Add a comment...' width='14' />
                    <Form.Button content='Reply' basic color='blue' />
                </Form.Group>
            </Form>
            <Comment>
                <Comment.Avatar src='/images/boy.png' />
                <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>

            <Comment>
                <Comment.Avatar src='/images/female.png' />
                <Comment.Content>
                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                        <div>Yesterday at 12:30AM</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='/images/male2.png' />
                        <Comment.Content>
                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                            <Comment.Metadata>
                                <div>Just now</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                Elliot you are always so right :)
                                </Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            </Comment>

            <Comment>
                <Comment.Avatar src='/images/man1.png' />
                <Comment.Content>
                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                    <Comment.Metadata>
                        <div>5 days ago</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        Dude, this is awesome. Thanks so much
                        </Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        </Comment.Group>
    </div>)

}

export default PostCommentSection