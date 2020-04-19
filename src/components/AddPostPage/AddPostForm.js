import React from 'react';
import { Form, Container, Message, Button, Popup, List } from 'semantic-ui-react'

import validator from 'validator';

export default class AddPostForm extends React.PureComponent {

  state = { url: '', hasError: false, error: { header: '', content: '' } }

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

  handleCancel = () => {
    this.props.backToHomePage();
  }

  handleNext = () => {
    const { url } = this.state;
    if (!url || !validator.isURL(url)) {
      this.setState({ hasError: true, error: { header: 'Invalid URL', content: 'Please enter a valid URL.' } })
      return;
    } else {
      const post = {
        url: url
      };

      this.props.checkAddNewVideoPost(post)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { errorData } = this.props;
    if (!prevProps.errorData && errorData) {
      this.setState({
        hasError: true, error:
          getErrorState(errorData)
      })
    }
  }

  render() {
    const { url, hasError, error } = this.state;
    const styles = { marginBottom: '3em' };
    const btnStyle = { marginLeft: '.75em' };

    return (
      <Container style={styles}>
        <Form error={hasError}>
          <Form.TextArea autoFocus={true} placeholder='URL' name='url' value={url} label='URL' onChange={this.handleChange} />
          <Message
            error
            header={error.header}
            content={error.content}
          />
          <Form.Field>
            <Button size="mini" className='btn-primary'
              style={btnStyle} floated='right' content='Next'
              onClick={this.handleNext} />
            <Button size="mini" className='btn-primary-o'
              floated='right' content='Cancel'
              onClick={this.handleCancel} />
          </Form.Field>
        </Form>
      </Container>
    )
  }
}

const getErrorState = (error) => {
  switch (error.type) {
    case 'UnsupportedProvider':
      return {
        header: 'Unsupported Provider',
        content: providerErrorContent()
      };
    case 'DuplicatePost':
      return {
        header: 'Duplicate URL Entry',
        content: duplicateErrorContent(error.errorData)
      };
    default:
      return {
        header: 'There is some problem processing the URL!',
        content: 'Please check the validity of the URL.'
      };
  }
}

const supportedProviders = () => (
  <List>
    <List.Item>
      <a href='https://www.youtube.com/'>YouTube</a>
    </List.Item>
    <List.Item>
      <a href='https://vimeo.com/'>Vimeo</a>
    </List.Item>
    <List.Item>
      <List.Content>
        <a href='https://www.ted.com/'>TED</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <a href='https://www.facebook.com/'>Facebook</a>
      </List.Content>
    </List.Item>
  </List>
)

const providerErrorContent = () => {
  const provierList = supportedProviders()
  const providerPopup = (
    <Popup
      trigger={<Button basic className="popover">providers</Button>}
      header='Supported Providers'
      content={provierList}
      on={['hover', 'click']}
    />
  );
  const content = <p>The provider is not supported at this moment. Please choose one of the supported {providerPopup}.</p>;

  return content;
}

const duplicateErrorContent = (errorData) => {
  console.log(errorData);
  const dupPostUrl = '/posts/' + errorData._id;
  const content = (
    <p>There is a post exists for the given URL!
     Please visit <a href={dupPostUrl} target="_blank" rel="noopener noreferrer">this page</a> to see the post.</p>
  );

  return content;
}