import React from 'react'
import { Modal, Button, Divider, Segment, Icon } from 'semantic-ui-react'

const LoginModal = props => {
    const onClose = (e, data) => {
        props.openLogin(false)
    }

    const onClick = (e) => {
        props.openLogin(true)
    }

    const buttonStyle = {
        backgroundColor: '#fff',
        color: '#f2711c'
    };

    const inverted = props.inverted;

    let triggerButton = null;
    if (inverted) {
        triggerButton = <Button onClick={onClick} style={buttonStyle} size='mini'>{props.name}</Button>;
    } else {
        triggerButton = <Button onClick={onClick} color='orange' size='mini'>{props.name}</Button>;
    }

    return (
        <Modal dimmer={'blurring'} onClose={onClose} open={props.open} trigger={triggerButton} closeIcon='close' size='small'>
            <Modal.Content>
                <Segment basic textAlign='center'>
                    <Button name='facebook' color='facebook' onClick={props.handleLogin}>
                        <Icon name='facebook' /> Facebook
                            </Button>
                    <Divider horizontal>Or</Divider>
                    <Button name='google' color='google plus' onClick={props.handleLogin}>
                        <Icon name='google' /> Google
                            </Button>
                </Segment>
            </Modal.Content>
        </Modal>
    )
}

export default LoginModal