import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react'

export default class ProfileSidebar extends React.PureComponent {

  state = { }

  handleChange = (e, { name, value }) => {
    e.preventDefault()
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <Container>
        <Segment.Group>
          <Header as='h3' attached='top' dividing>
            Profile Sidebar
          </Header>
          <Segment attached>
            Contains links to the pages including liked posts, lists (watchlist, etc)
          </Segment>
        </Segment.Group>
      </Container>
    )
  }
}