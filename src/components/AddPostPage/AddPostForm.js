import React from 'react';
import { Header, Button, Checkbox, Form, Container, Segment } from 'semantic-ui-react'

import Post from '../Post'

export default class AddPostForm extends React.Component {

  state = { url: '', title: '', description: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = e => {
    e.preventDefault()
    const date = new Date()
    const postId = date.toDateString()
    const { url, title, description } = this.state
    const post = {
      url: url,
      title: title,
      subtitle: description,
      comments: 0,
      likes: 0,
      userId: 'nischal.srinivas'
    }
    this.props.addNewVideoPost(post)
  }
  render() {
    const { url, title, description } = this.state

    const post = {
      url: url,
      title: title,
      subtitle: description,
      footerVisible: false
    }
    return (
      <Container>
        <Header as='h2' attached='top'>
          Add an awesome video
        </Header>
        <Segment attached>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input placeholder='URL' name='url' value={url} label='URL' onChange={this.handleChange} />
            </Form.Group>
            <Form.Input placeholder='Video title' name='title' value={title} label='Title' onChange={this.handleChange} />
            <Form.Input placeholder='eg: Video by Rahman' name='description' value={description} label='Short description' onChange={this.handleChange} />
            <Form.Button content='Submit' />
          </Form>
        </Segment>
        <Header as='h2' attached='top'>
          Preview
        </Header>
        <Segment attached>
          <Post footerVisible={false} url={url} title={title} subtitle={description}/>
        </Segment>
      </Container>
    )
  }
}