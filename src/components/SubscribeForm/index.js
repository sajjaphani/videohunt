import React from 'react'
import { Container, Segment, Form, Header, Button, Divider, Message, Icon } from 'semantic-ui-react'

import isEmail from 'validator/lib/isEmail';

import './SubscribeForm.css';

export default class SubscribeForm extends React.PureComponent {
    state = { email: '', hasError: false, error: '', subscribed: false }

    handleChange = (e, { value }) => {
        e.preventDefault()
        this.setState({ email: value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { email } = this.state;
        if (!isEmail(email)) {
            this.setState({ hasError: true, error: 'Enter a valid email address.' })
            return;
        } else {
            this.setState({ hasError: false, error: '' })
            const subscription = {
                email: email
            };

            this.props.addSubscription(subscription)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { subscription } = this.props;
        if (!prevProps.subscription && subscription) {
            this.setState({ subscribed: true })
        }
    }

    render() {
        const borderStyle = { borderRadius: '4px' };

        const loggedIn = this.props.loggedIn;
        if (loggedIn) {
            return <div />
        }

        const { hasError, error, email, subscribed } = this.state;

        let subsElement = null;
        if (subscribed) {
            subsElement = (
                <Message size='mini' success>
                    <Icon name='signing' color='yellow' />
                    Thank you for joining us!
                </Message>
            );
        } else {
            subsElement = (
                <Form error={hasError} onSubmit={this.handleSubmit}>
                    <Form.Input placeholder='Your email' name='email' value={email} onChange={this.handleChange} />
                    <Message size='mini'
                        error
                        content={error}
                    />
                    <Form.Field>
                        <Button fluid type='submit' size="mini" className='btn-primary'>Subscribe</Button>
                    </Form.Field>
                </Form>
            );
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
                    {subsElement}
                </Segment>
            </Container>
        )
    }
}
