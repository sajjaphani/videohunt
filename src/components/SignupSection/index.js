import React from 'react'
import { Container, Message, Segment, Divider, Header, Grid, Button, Image } from 'semantic-ui-react'

const SignupSection = (props) => {
    if (props.loggedIn) {
        return <div />
    }
    return (
        <Segment padded='very'>
            <Grid>
                <Grid.Row >
                    <Grid.Column floated='right' mobile='sixteen' tablet='sixteen' computer='eight' largeScreen='eight' widescreen='eight' >
                        <Divider hidden />
                        <Header size='huge'>
                            Discover awesome videos everyday
                            <Divider hidden />
                            <Header.Subheader>
                                Video Hunt surfaces the best new videos, every day. It's a place for video-loving enthusiasts to share and watch latest awesome videos. So join our awesome community to discover awesome videos everyday.
                            </Header.Subheader>
                            <Divider hidden />
                            <Button color='orange' onClick={props.openLogin}>SIGN UP</Button>
                        </Header>
                    </Grid.Column>
                    <Grid.Column only='computer' floated='right' computer='six' largeScreen='six' widescreen='six'>
                        <Image src='/images/login_logo.png' size='medium' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default SignupSection