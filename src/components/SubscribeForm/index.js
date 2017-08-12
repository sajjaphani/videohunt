import React from 'react'
import { Segment, Form, Header } from 'semantic-ui-react'

const SubscribeForm = (props) => {
    if (props.loggedIn) {
        return <div />
    }
    return (
        <Segment>
            <Header size='small'>
                Subscribe
            <Header.Subheader>
                    Get the best new videos in your inbox, every day
            </Header.Subheader>
            </Header>
            <Form >
                <Form.Input placeholder='Your email...' name='title' />
                <Form.Button color='orange' fluid content='Subscribe' />
            </Form>
        </Segment>
    )
}

export default SubscribeForm