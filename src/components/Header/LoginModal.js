import React from 'react'
import { Modal, Button, Header, Container, Divider, Segment, Icon, Loader, Image, Dimmer } from 'semantic-ui-react'

const LoginModal = props => {
    return (
        <Modal dimmer={'blurring'} trigger={<Button color='orange' size='mini'>{props.name}</Button>} closeIcon='close' size='small'>
            {/*<Modal.Header>Select a Photo</Modal.Header>*/}
            <Modal.Content image>
                {/*<Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />*/}
                <Segment basic textAlign='center'>

                    <Modal.Content>
                        <Button name='facebook' color='facebook' onClick={props.handleLogin}>
                            <Icon name='facebook' /> Facebook
                            </Button>
                        <Divider horizontal>Or</Divider>
                        <Button name='google' color='google plus' onClick={props.handleLogin}>
                            <Icon name='google plus' /> Google Plus
                            </Button>
                        <Divider horizontal>Or</Divider>
                        <Button name='twitter' color='twitter' onClick={props.handleLogin}>
                            <Icon name='twitter' /> Twitter
                            </Button>
                    </Modal.Content>
                </Segment>

            </Modal.Content>
        </Modal>
    )
}

export default LoginModal