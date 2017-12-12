import React from 'react'
import { Modal, Button, Divider, Segment, Icon } from 'semantic-ui-react'

const LoginModal = props => {
    const onClose = (e, data) => {
        props.openLogin(false)
    }

    const onClick = (e) => {
        props.openLogin(true)
    }
    return (
        <Modal dimmer={'blurring'} onClose={onClose} open={props.open} trigger={<Button onClick={onClick} color='orange' size='mini'>{props.name}</Button>} closeIcon='close' size='small'>
            <Modal.Content>
                <Segment basic textAlign='center'>

                        <Button name='facebook' color='facebook' onClick={props.handleLogin}>
                            <Icon name='facebook' /> Facebook
                            </Button>
                        <Divider horizontal>Or</Divider>
                        <Button name='google' color='google plus' onClick={props.handleLogin}>
                            <Icon name='google plus' /> Google
                            </Button>
                        <Divider horizontal>Or</Divider>
                        <Button name='twitter' color='twitter' onClick={props.handleLogin}>
                            <Icon name='twitter' /> Twitter
                            </Button>
                </Segment>
            </Modal.Content>
        </Modal>
    )
}

export default LoginModal