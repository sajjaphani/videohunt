import React from 'react';
import { Label, Container } from 'semantic-ui-react'

export default class AddPostInfoHeader extends React.PureComponent {

  render() {

    return (
      <Container>
        <Label tag size='massive'>New Post</Label>
      </Container>
    )
  }
}