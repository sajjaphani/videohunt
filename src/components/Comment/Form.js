import React from 'react'
import { Form, Button } from 'semantic-ui-react'

import User from '../../containers/User'

export default class CommentForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = { commentText: '', showButtons: true, mention: null };
    }

    handleChange = (e) => {
        const value = e.currentTarget.textContent;
        this.setState({ commentText: value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { postId, userId, commentId, parentCommentId, commentAuthorId } = this.props;
        const { commentText } = this.state;
        if (commentText.trim().length === 0) {
            return;
        }

        if (postId) {
            const comment = {
                postId,
                userId,
                text: commentText,
                id: new Date().getTime().toString()
            };
            this.props.addComment(comment);
        } else {
            const parentId = parentCommentId || commentId;
            if (parentId) {
                const reply = {
                    parentId: parentId,
                    userId,
                    text: commentText,
                    id: new Date().getTime().toString(),
                    mention: commentAuthorId
                };
                this.props.addReply(reply);
            }
        }

        this.setState({ commentText: '' });
        this.textInput.current.innerHTML = '';
    }

    componentDidMount() {
        if (this.props.showForm && this.textInput) {
            this.textInput.current.focus();
        }

        if (this.props.commentAuthorId) {
            this.setState({ mention: this.props.commentAuthorId });
        }
    }

    componentDidUpdate(_) {
        if (this.props.showForm && this.textInput) {
            this.textInput.current.focus();
        }
    }

    render() {
        const { hidden, currentUserId, postId, commentAuthorName } = this.props
        if (hidden) {
            return null
        }

        const btnStyle = { marginLeft: '.75em' };
        const submitText = postId ? 'COMMENT' : 'REPLY';
        const hintText = postId ? 'Add a comment...' : commentAuthorName ? `Add a reply ${commentAuthorName}'s comment ...` : 'Add a reply...';

        const { commentText } = this.state;
        let disabled = true;
        if (commentText.trim().length > 0) {
            disabled = false;
        }

        return (
            <Form reply size='mini'>
                <Form.Group>
                    <Form.Input width='16'>
                        <User showName={false} userId={currentUserId} />
                        <div ref={this.textInput} onInput={this.handleChange} onFocus={this.handleFocusIn} onBlur={this.handleFocusOut}
                            data-text={hintText} className='ui editable' contentEditable={true} autoComplete='off'>
                        </div>
                        <Button disabled={disabled} size="mini" className='btn-primary'
                            style={btnStyle} floated='right' content={submitText}
                            onClick={this.handleSubmit} />
                    </Form.Input>
                </Form.Group>
            </Form>
        )
    }
}