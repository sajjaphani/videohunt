import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react'

export default class ProfileHeader extends React.PureComponent {

  state = { }

  handleChange = (e, { name, value }) => {
    e.preventDefault()
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    // e.preventDefault()
    // this.props.addNewVideoPost(post)
  }

  render() {
    return (
      <Container>
        <Segment.Group>
          <Header as='h3' attached='top' dividing>
            Profile Header
          </Header>
          <Segment attached>
            Contains profile picture, following/follower lists etc.
          </Segment>
        </Segment.Group>
      </Container>
    )
  }
}