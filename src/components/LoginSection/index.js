import React from 'react'
import { Container, Segment, Header, Icon, Button, Divider } from 'semantic-ui-react'

import Logo from '../Header/Logo'

export default class LoginSection extends React.PureComponent {

    render() {
        return (
            <Container textAlign='center'>
                <Segment basic>
                    <Logo full={true} />
                </Segment>
                <Segment basic>
                    <Header size='medium' as="h3">
                        Sign up on VideoHunt
                            <Header.Subheader>
                            A place for video-loving enthusiasts to share and watch the awesome videos.
                            </Header.Subheader>
                    </Header>
                </Segment>
                <Segment basic textAlign='center' size="mini">
                    <Button name='google' color='google plus' onClick={this.props.handleLogin}>
                        <Icon name='google' /> Continue with Google
                        </Button>
                    <Divider horizontal>Or</Divider>
                    <Button name='facebook' color='facebook' onClick={this.props.handleLogin}>
                        <Icon name='facebook' /> Continue with Facebook
                        </Button>
                </Segment>
                <Segment basic textAlign='center'>
                    <Header size='small'>
                        <Header.Subheader>
                            We will never post to any of your accounts without your permission.
                            </Header.Subheader>
                    </Header>
                </Segment>
            </Container>
        )
    }
}