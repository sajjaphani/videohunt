import React from 'react'
import { Modal, Button, Divider, Segment, Icon, Container, Header } from 'semantic-ui-react'

import Logo from './Logo'

const LoginModal = props => {
    const onClose = (e, data) => {
        props.openLogin(false)
    }

    const onClick = (e) => {
        props.openLogin(true)
    }

    const inverted = props.inverted;

    let triggerButton = null;
    if (inverted) {
        triggerButton = <Button onClick={onClick} className="btn-primary-link" size='mini'>{props.name}</Button>;
    } else {
        triggerButton = <Button onClick={onClick} className="btn-primary" size='mini'>{props.name}</Button>;
    }

    return (
        <Modal dimmer={'blurring'} onClose={onClose} open={props.open} trigger={triggerButton} closeIcon='close' size='small'>
            <Modal.Content className="ui-background">
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
                        <Button name='google' color='google plus' onClick={props.handleLogin}>
                            <Icon name='google' /> Continue with Google
                        </Button>
                        <Divider horizontal>Or</Divider>
                        <Button name='facebook' color='facebook' onClick={props.handleLogin}>
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
            </Modal.Content>
        </Modal>
    )
}

export default LoginModal