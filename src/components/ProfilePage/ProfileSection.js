import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react'

export default class ProfileSection extends React.PureComponent {

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
            Profile Section
          </Header>
          <Segment attached>
            Details of the current selection, E.g, if user selects lists from sidebar, we show the watchlists
            <br /> <br /> <br /> <br />
          </Segment>
        </Segment.Group>
      </Container>
    )
  }
}