import React from 'react'
import { Container, Segment, Form, Header, Button, Divider } from 'semantic-ui-react'

import './SubscribeForm.css';

const SubscribeForm = (props) => {

    const borderStyle = { borderRadius: '4px' }
    if (props.loggedIn) {
        return <div />
    }

    return (
        <Container className="ui-background" style={borderStyle}>
            <Segment className="segment-first">
                <Header size='small'>
                    Subscribe
                </Header>
            </Segment>
            <Divider />
            <Segment className="segment-middle">
                <Header size='small'>
                    <Header.Subheader>
                        Get the best new videos in your inbox every day.
                    </Header.Subheader>
                </Header>
            </Segment>
            <Segment className="segment-last">
                <Form>
                    <Form.Input placeholder='Your email' name='title' />
                    <Form.Field>
                        <Button fluid type='submit' size="mini" className='btn-primary'>Subscribe</Button>
                    </Form.Field>
                </Form>
            </Segment>
        </Container>
    )
}

export default SubscribeForm