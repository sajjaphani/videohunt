import React from 'react';
import { Header, Button, Label, Container, Segment } from 'semantic-ui-react'

export default class SettingsForm extends React.PureComponent {

    state = { }

    handleChange = (e, { name, value }) => {
        e.preventDefault()
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render() {
          return (
            <Container>
                    <Label tag size='massive'>Settings</Label>
                <Segment.Group>
                    <Header as='h3' attached='top' dividing>
                        Connect Accounts
                    </Header>
                    <Segment attached>
                        Like which account is used to login
                    </Segment>
                </Segment.Group>
                <Segment.Group>
                    <Header as='h3' attached='top' dividing>
                        Details
                    </Header>
                    <Segment attached>
                        Person details, like display name, headline etc
                    </Segment>
                </Segment.Group>
                <Segment.Group>
                    <Header as='h3' attached='top' dividing>
                        Language
                    </Header>
                    <Segment attached>
                        Choose your preferred languages
                    </Segment>
                </Segment.Group>
                <Segment.Group>
                    <Header as='h3' attached='top' dividing>
                        Notifications
                    </Header>
                    <Segment attached>
                        Like newsletter subscriptions, notification for mobile, browser etc.
                    </Segment>
                </Segment.Group>
                <Button color='orange'>Update</Button>
            </Container>
        )
    }
}