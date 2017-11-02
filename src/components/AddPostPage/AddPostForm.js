import React from 'react';
import { Header, Button, Label, Checkbox, Form, Container, Segment, Select, Message } from 'semantic-ui-react'

import Post from '../Post'

export default class AddPostForm extends React.PureComponent {

  state = { url: '' }

  handleChange = (e, { name, value }) => {
    e.preventDefault()
    this.setState({ [name]: value })
  }

  handleMouseOver = (value) => {
    this.props.updatePostHint(value)
  }

  handleFocus = (value) => {
    this.props.updatePostHint(value)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { url } = this.state
    const post = {
      url: url
    }
    this.props.checkAddNewVideoPost(post)
  }

  render() {
    const { url } = this.state
    let dupPostUrl
    if (this.props.duplicatePost) {
      dupPostUrl = '/posts/' + this.props.duplicatePost.id
    }

    return (
      <Container>
        <Header as='h2' attached='top'>
          Add an awesome video
        </Header>
        <Segment attached>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input autoFocus={true} placeholder='URL' name='url' value={url} label='URL' onChange={this.handleChange}
                onFocus={this.handleFocus.bind(this, 'url')} onMouseOver={this.handleMouseOver.bind(this, 'url')} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Button color='orange' floated='right' content='Next' />
            </Form.Group>
          </Form>
        </Segment>
        {this.props.duplicatePost &&
          <Segment attached>
            <Message warning>
              <Message.Header>There is a post exists for the given URL!</Message.Header>
              <p>Visit <a href={dupPostUrl}> page</a> to see the post.</p>
            </Message>
          </Segment>
        }
        {this.props.errorData &&
          <Segment attached>
            <Message error>
              <Message.Header>There is some problem processing the URL!</Message.Header>
              <p>Please check the validity of the URL.</p>
            </Message>
          </Segment>
        }
      </Container>
    )
  }
}