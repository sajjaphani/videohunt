import React from 'react'
import { Modal, Button, Header, Container, Divider, Segment, Icon, Loader, Image, Dimmer } from 'semantic-ui-react'

export default class LoginModal extends React.Component {

    render() {
        return (

            <Modal dimmer={'blurring'} trigger={<Button color='orange' size='mini'>{this.props.name}</Button>} closeIcon='close' size='small'>
                {/*<Modal.Header>Select a Photo</Modal.Header>*/}
                <Modal.Content image>
                    {/*<Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />*/}
                    <Segment textAlign='center'>

                        <Modal.Description>
                            <Button color='facebook'>
                                <Icon name='facebook' /> Facebook
                            </Button>
                            <Divider horizontal>Or</Divider>
                            <Button color='google plus'>
                                <Icon name='google plus' /> Google Plus
                            </Button>
                            <Divider horizontal>Or</Divider>
                            <Button color='twitter'>
                                <Icon name='twitter' /> Twitter
                            </Button>
                        </Modal.Description>
                    </Segment>

                </Modal.Content>
            </Modal>

        )
    }

}