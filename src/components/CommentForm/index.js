import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class CommentForm extends React.PureComponent {
    state = { commentText: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        e.preventDefault()
        const { postId, userId } = this.props
        const { commentText } = this.state
        const comment = {
            postId,
            userId,
            text: commentText,
            id: new Date().getTime().toString()
        }
        this.props.addComment(comment)
        this.setState({ commentText: '' })
    }
    render() {
        return (
            <Form reply size='mini' onSubmit={this.handleSubmit}>
                <Form.Group >
                    {/*<Image src='/images/boy.png' size='tiny'  width='2' circular/>*/}
                    {/*<Button icon='checkmark' size='mini' basic color='blue' width='1'/>*/}
                    <Form.Input
                        name='commentText'
                        value={this.state.commentText}
                        placeholder='Add a comment...'
                        width='15'
                        onChange={this.handleChange} />
                    <Button icon='checkmark' size='mini' basic color='blue' width='1' />
                    {/*<Form.Button content='Reply' basic color='blue' />*/}
                </Form.Group>
            </Form>
        )
    }
}