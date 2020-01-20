import React from 'react';
import { Header, Form, Container, Segment, Select } from 'semantic-ui-react'

import Post from '../Post'

export default class AddPostInfoForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { url: '', synopsis: '', title: '', subtitle: '', language: '', category: '', embed: '' }
  }

  componentDidMount() {
    if (!this.props.newPost)
      this.props.redirectToFirstPage()
    else 
      this.setState({ url: this.props.newPost.url, synopsis: this.props.newPost.description, title: this.props.newPost.title, subtitle: this.props.newPost.author, language: '', category: '', embed: this.props.newPost.html })
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

    const langOptions = [
      { key: 'english', text: 'English', value: 'english' },
      { key: 'hindi', text: 'Hindi', value: 'hindi' },
      { key: 'bengali', text: 'Bengali', value: 'bengali' },
      { key: 'telugu', text: 'Telugu', value: 'telugu' },
      { key: 'marathi', text: 'Marathi', value: 'marathi' },
      { key: 'tamil', text: 'Tamil', value: 'tamil' },
      { key: 'urdu', text: 'Urdu', value: 'urdu' },
      { key: 'kannada', text: 'Kannada', value: 'kannada' },
      { key: 'gujarati', text: 'Gujarati', value: 'gujarati' },
      { key: 'odia', text: 'Odia', value: 'odia' },
      { key: 'malayalam', text: 'Malayalam', value: 'malayalam' },
      { key: 'sanskrit', text: 'Sanskrit', value: 'sanskrit' },
    ]

    const categoryOptions = [
      { key: 'action', text: 'Action', value: 'action' },
      { key: 'comedy', text: 'Comedy', value: 'comedy' },
      { key: 'inspirational', text: 'Inspirational', value: 'inspirational' },
      { key: 'romance', text: 'Romance', value: 'romance' },
      { key: 'science', text: 'Science', value: 'science' },
      { key: 'short-films', text: 'Short Films', value: 'short-films' },
      { key: 'sports', text: 'Sports', value: 'sports' },
      { key: 'technology', text: 'Technology', value: 'technology' },
      { key: 'trailers', text: 'Trailers', value: 'trailers' },
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
            <Form.Button color='orange' content='Submit' />
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