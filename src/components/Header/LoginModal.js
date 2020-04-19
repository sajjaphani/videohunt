import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

import LoginSection from '../LoginSection';

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
                <LoginSection handleLogin={props.handleLogin} />
            </Modal.Content>
        </Modal>
    )
}

export default LoginModal