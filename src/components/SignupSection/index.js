import React from 'react'
import { Segment, Divider, Header, Grid, Button, Image, Embed } from 'semantic-ui-react'

const SignupSection = (props) => {
    if (props.loggedIn) {
        return <div />
    }
    return (
        <Segment padded='very'>
            <Grid>
                <Grid.Row >
                    <Grid.Column floated='right' mobile='sixteen' tablet='sixteen' computer='eight' largeScreen='eight' widescreen='eight' >
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
                    <Grid.Column only='computer' floated='left' computer='six' largeScreen='six' widescreen='six'>
                        {/* <Image src='/images/login_logo.png' size='medium' /> */}
                        <Embed
                            id={'wa1n3s7M-1A'}
                            placeholder={'http://img.youtube.com/vi/wa1n3s7M-1A/maxresdefault.jpg'}
                            source='youtube'
                            autoplay={true}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default SignupSection