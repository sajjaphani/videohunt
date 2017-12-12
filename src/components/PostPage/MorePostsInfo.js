import React from 'react';
import { Header, Container, Item, Segment } from 'semantic-ui-react'

export default class MorePostsInfo extends React.PureComponent {

  render() {
    const items = [
      {
        childKey: 0,
        image: 'https://i.ytimg.com/vi/dhFzNQsRh_I/maxresdefault.jpg',
        header: 'When Your Dog Is Better Looking Than You',
        description: 'WHY ARE YOU SO BEAUTIFUL.',
        meta: 'BuzzFeedVideo',
      },
      {
        childKey: 1,
        image: 'https://i.ytimg.com/vi/rHtSQynwLGE/maxresdefault.jpg',
        header: 'When You Walk Your Anxious Puppy',
        description: '“I don’t want you to panic, but we’re lost!”',
        meta: 'BuzzFeedVideo',
      },
      {
        childKey: 2,
        image: 'https://i.ytimg.com/vi/ifXO3U8DxYU/maxresdefault.jpg',
        header: 'Puppyhood: Back To Work',
        description: 'The separation anxiety is real. New Puppy Chow Natural.',
        meta: 'BuzzFeedVideo',
      },
      {
        childKey: 3,
        image: 'https://i.ytimg.com/vi/G4Sn91t1V4g/maxresdefault.jpg',
        header: 'Dear Kitten',
        description: 'Cats everywhere are promising big changes for a taste of wet cat food. What will your cat do?',
        meta: 'BuzzFeedVideo',
      }
    ]
    return (
      <Container>
        <Segment.Group>
          <Header as='h3' attached='top' dividing>
            Related Videos
          </Header>
          <Segment attached>
            <Item.Group divided items={items} />
          </Segment>
        </Segment.Group>
      </Container>
    )
  }
}
