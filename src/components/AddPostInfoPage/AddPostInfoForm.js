import React from 'react';
import { Header, Button, Label, Checkbox, Form, Container, Segment, Select } from 'semantic-ui-react'

import Post from '../Post'

export default class AddPostInfoForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { url: '', synopsis: '', title: '', subtitle: '', language: '', category: '', embed: '' }
  }

  componentWillMount() {
    if (!this.props.newPost)
      this.props.redirectToFirstPage()
    else 
      this.setState({ url: this.props.newPost.url, synopsis: this.props.newPost.description, title: this.props.newPost.title, subtitle: this.props.newPost.author, language: '', category: '', embed: this.props.newPost.html })
  }

  componentDidMount() {
    FB.XFBML.parse()
  }

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
    const { url, title, subtitle, synopsis, language, category } = this.state
    const post = {
      url: url,
      synopsis: synopsis,
      title: title,
      author: subtitle,
      language: language,
      category: category
    }
    this.props.addNewVideoPost(post)
  }

  render() {
    if (!this.props.newPost)
      return (<div />)

    const { url, title, synopsis, embed, subtitle } = this.state
    // console.log('url', embed)
    // const { synopsis, subtitle } = this.state

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
              <Form.Input autoFocus={true} placeholder='URL' name='url' value={url} label='URL' readOnly onChange={this.handleChange}
                onFocus={this.handleFocus.bind(this, 'url')} onMouseOver={this.handleMouseOver.bind(this, 'url')} />
            </Form.Group>
            <Form.Input placeholder='Video title' name='title' value={title} label='Title' readOnly onChange={this.handleChange}
              onFocus={this.handleFocus.bind(this, 'title')} onMouseOver={this.handleMouseOver.bind(this, 'title')} />
            <Form.TextArea placeholder='Short summary' rows='3' name='synopsis' value={synopsis} label='Synopsis' onChange={this.handleChange}
              onFocus={this.handleFocus.bind(this, 'synopsis')} onMouseOver={this.handleMouseOver.bind(this, 'synopsis')} />
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
            <Post.Embed embed={embed} />
          </Post>
        </Segment>
      </Container>
    )
  }
}