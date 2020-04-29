import React from 'react';
import { Form, Container, Dropdown, Button, Message } from 'semantic-ui-react'

import Post from '../Post'
import ErrorBoundary from '../ErrorBoundary';

export default class AddPostInfoForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { hasError: false, url: '', description: '', title: '', author: '', language: '', topics: [], embed: '' }
  }

  componentDidMount() {
    if (!this.props.newPost)
      this.props.redirectToFirstPage()
    else {
      this.setState({
        url: this.props.newPost.url, description: this.props.newPost.description,
        title: this.props.newPost.title, author: this.props.newPost.author,
        language: 'None', topics: [], embed: this.props.newPost.embed
      });
    }

    if (!this.props.tags) {
      this.props.loadTagTopics();
    }
  }

  handleChange = (e, { name, value }) => {
    e.preventDefault()
    this.setState({ [name]: value });
  }

  handleTopicChange = (e, { value }) => {
    e.preventDefault()
    this.setState({ 'topics': value });
  }

  handleBack = () => {
    this.props.backToPrevPage();
  }

  handleNext = () => {
    const { url, title, author, description, topics } = this.state;
    if (!topics || topics.length === 0 || topics.length > 3) {
      this.setState({ hasError: true })
    } else {
      this.setState({ hasError: false })
    }

    const post = {
      url: url,
      title: title,
      description: description,
      author: author,
      language: 'None',
      categories: topics
    }

    this.props.addNewVideoPost(post)
  }

  render() {
    if (!this.props.newPost)
      return (<div />)

    const { tags } = this.props
    let topicOptions = []
    if (tags) {
      topicOptions = tags.map((tag) => {
        return { key: tag.id, text: tag.name, value: tag.id };
      });
    }

    const styles = { marginBottom: '3em' };
    const postStyles = { marginTop: '0.5em', marginBottom: '1.5em' };
    const btnStyle = { marginLeft: '.75em' };

    const renderLabel = (label) => ({
      content: `${label.text}`,
      icon: 'tag',
    })

    const { title, embed, author, hasError } = this.state
    const postId = 'some-post';

    return (
      <Container style={styles}>
        <div style={postStyles}>
          <Post>
            <Post.Header title={title} author={author} />
            <ErrorBoundary>
              <Post.Embed embed={embed} postId={postId} />
            </ErrorBoundary>
          </Post>
        </div>
        <Form error={hasError}>
          <Form.Field>
            <label>Topics</label>
            <Dropdown
              placeholder='Topic'
              multiple
              onChange={this.handleTopicChange}
              fluid
              search
              selection
              options={topicOptions}
              renderLabel={renderLabel}
            />
          </Form.Field>
          <Message
            error
            content='Please choose 1 to 3 topics.'
          />
          <Form.Field>
            <Button size="mini" className='btn-primary'
              style={btnStyle} floated='right' content='Submit'
              onClick={this.handleNext} />
            <Button size="mini" className='btn-primary-o'
              floated='right' content='Back'
              onClick={this.handleBack} />
          </Form.Field>
        </Form>
      </Container>
    )
  }
}