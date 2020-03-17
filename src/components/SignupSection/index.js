import React from 'react'
import { Segment, Divider, Header, Grid, Button, Embed } from 'semantic-ui-react'

const SignupSection = (props) => {

    const borderStyle = { borderRadius: '4px' }

    if (props.loggedIn) {
        return <div />
    }

    return (
        <Segment padded='very' style={borderStyle}>
            <Grid>
                <Grid.Row >
                    <Grid.Column floated='right' mobile='sixteen' tablet='sixteen' computer='eight' largeScreen='eight' widescreen='eight' >
                        <Header size='huge'>
                            Discover Awesome Videos Everyday
                            <Divider hidden />
                            <Header.Subheader>
                                VideoHunt surfaces the best new videos every day. It's a place for video-loving enthusiasts to share and watch the latest awesome videos. So join our awesome community to discover awesome videos every day.
                            </Header.Subheader>
                            <Divider hidden />
                            <Button className='btn-primary' size="mini" onClick={props.openLogin}>SIGN UP</Button>
                        </Header>
                    </Grid.Column>
                    <Grid.Column only='computer' floated='left' computer='six' largeScreen='six' widescreen='six'>
                        {/* <Image src='/images/login_logo.png' size='medium' /> */}
                        <Embed
                            id={'wa1n3s7M-1A'}
                            placeholder={'https://img.youtube.com/vi/wa1n3s7M-1A/maxresdefault.jpg'}
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