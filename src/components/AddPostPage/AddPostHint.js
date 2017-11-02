import React from 'react';
import { Header, Label, Container, Segment } from 'semantic-ui-react'

export default class AddPostHint extends React.PureComponent {

  render() {
    return (
      <Container>
        <Segment.Group>
          <Header as='h3' attached='top' dividing>
            Post Hint
          </Header>
          <Segment attached>
            <div>
              <Label basic>{this.props.name}</Label>
            </div>
            <span>
              {this.props.hint}
            </span>
          </Segment>
        </Segment.Group>
      </Container>
    )
  }
}