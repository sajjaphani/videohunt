import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class CommentForm extends React.PureComponent {
    state = { commentText: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        e.preventDefault()
        const { postId, userId, commentId } = this.props
        const { commentText } = this.state
        if (postId) {
            const comment = {
                postId,
                userId,
                text: commentText,
                id: new Date().getTime().toString()
            }
            this.props.addComment(comment)
        } else if (commentId) {
            const comment = {
                // comment id of parent comment
                parentId: commentId,
                userId,
                text: commentText,
                id: new Date().getTime().toString()
            }
            this.props.addReply(comment)
        }
        this.setState({ commentText: '' })
    }
    render() {
        if (this.props.hidden) {
            return null
        }
        return (
            <Form reply size='mini' onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Input
                        name='commentText'
                        value={this.state.commentText}
                        placeholder='Add a comment...'
                        width='16'
                        onChange={this.handleChange}
                        action>
                        <input autoFocus/>
                        <Button icon='checkmark' basic color='blue' />
                    </Form.Input>
                </Form.Group>
            </Form>
        )
    }
}