import React from 'react';
import { Header, Button, Label, Checkbox, Form, Container, Segment, Select } from 'semantic-ui-react'

import Post from '../Post'

export default class AddPostForm extends React.PureComponent {

  state = { url: '', title: '', subtitle: '', language: '', category: '' }

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
    const date = new Date()
    const postId = date.toDateString()
    const { url, title, subtitle, language, category } = this.state
    const post = {
      url: url,
      title: title,
      subtitle: subtitle,
      language: language,
      category: category,
      comments: 0,
      likes: 0,
      userId: 'nischal.srinivas'
    }
    this.props.addNewVideoPost(post)
  }

  render() {
    const { url, title, subtitle } = this.state

    const post = {
      url: url,
      title: title,
      subtitle: subtitle,
      footerVisible: false
    }
    const langOptions = [
      { key: 'english', text: 'English', value: 'english' },
      { key: 'hindi', text: 'Hindi', value: 'hindi' },
      { key: 'telugu', text: 'Telugu', value: 'telugu' },
      { key: 'tamil', text: 'Tamil', value: 'tamil' },
      { key: 'malayalam', text: 'Malayalam', value: 'malayalam' },
    ]

    const categoryOptions = [
      { key: 'action', text: 'Action', value: 'action' },
      { key: 'comedy', text: 'Comedy', value: 'comedy' },
      { key: 'inspirational', text: 'Inspirational', value: 'inspirational' },
      { key: 'romance', text: 'Romance', value: 'romance' },
      { key: 'science', text: 'Science', value: 'science' },
      { key: 'shortfilms', text: 'Short Films', value: 'shortfilms' },
      { key: 'sports', text: 'Sports', value: 'sports' },
      { key: 'technology', text: 'Technology', value: 'technology' },
      { key: 'viral', text: 'Viral', value: 'viral' },
    ]

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
            <Form.Input placeholder='Video title' name='title' value={title} label='Title' onChange={this.handleChange} 
                  onFocus={this.handleFocus.bind(this, 'title')} onMouseOver={this.handleMouseOver.bind(this, 'title')} />
            <Form.Input placeholder='eg: Video by Rahman' name='subtitle' value={subtitle} label='Sub Title' onChange={this.handleChange} 
                  onFocus={this.handleFocus.bind(this, 'subtitle')} onMouseOver={this.handleMouseOver.bind(this, 'subtitle')} />
            {/* <Dropdown placeholder='Skills' label='Skills' search fluid selection options={options} onChange={this.handleDropDown} /> */}
            <Form.Field control={Select} label='Language' name='language' options={langOptions} placeholder='Language' onChange={this.handleChange} 
                  onFocus={this.handleFocus.bind(this, 'language')} onMouseOver={this.handleMouseOver.bind(this, 'language')} />
            <Form.Field control={Select} label='Category' name='category' options={categoryOptions} placeholder='Category' onChange={this.handleChange} 
                  onFocus={this.handleFocus.bind(this, 'category')} onMouseOver={this.handleMouseOver.bind(this, 'category')} />
            <Form.Button content='Submit' />
          </Form>
        </Segment>
        <Header as='h2' attached='top'>
          Preview
        </Header>
        <Segment attached>
          <Post>
            <Post.Header title={title} subtitle={subtitle} />
            <Post.Video url={url} />
          </Post>
        </Segment>
      </Container>
    )
  }
}