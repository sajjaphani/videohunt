import React from 'react';
import { Header, Image, Container, Segment } from 'semantic-ui-react'

export default class MorePostsInfo extends React.PureComponent {

  render() {
    const src = 'https://i.ytimg.com/vi/DuHu1HlYk08/hqdefault.jpg'
    const src1 = 'https://i.ytimg.com/vi/o0p7vwwhIRw/mqdefault.jpg'
    const src2 = 'https://i.ytimg.com/vi/n1d4uS3vbzw/mqdefault.jpg'
    return (
      <Container>
        <Segment.Group>
          <Header as='h3' attached='top' dividing>
            Related Videos
          </Header>
          <Segment attached>
            <Image src={src} size='small' floated='left' />
            <p>
              Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip
            detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos
            choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
          </p>
          </Segment>
          <Segment attached>
            <Image src={src1} size='small' floated='left' />
            <p>
              Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip
            detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos
            choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
          </p>
          </Segment>
          <Segment attached>
            <Image src={src2} size='small' floated='left' />
            <p>
              Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip
            detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos
            choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
          </p>
          </Segment>
        </Segment.Group>
      </Container>
    )
  }
}