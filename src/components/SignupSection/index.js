import React from 'react'
import { Segment, Divider, Header, Grid, Embed, Button } from 'semantic-ui-react'

const dismissStyle = { position: 'relative', top: '-2em', left: '99%' };

const SignupSection = (props) => {

    const sectionStyle = { borderRadius: '4px', marginTop: '2em' }

    if (props.loggedIn || props.isHomeSectionClosed) {
        return <div />
    }

    return (
        <Segment padded='very' style={sectionStyle}>
            <div style={dismissStyle}>
                <Button className='dismiss' circular icon='remove' onClick={props.handleHeadSectionDismiss} />
            </div>
            <Grid>
                <Grid.Row>
                    <Grid.Column floated='right' mobile='sixteen' tablet='sixteen' computer='eight' largeScreen='eight' widescreen='eight' >
                        <Header size='huge'>
                            Discover Awesome Videos Everyday
                            <Divider hidden />
                            <Header.Subheader>
                                VideoHunt surfaces the best new videos every day. It's a place for video-loving enthusiasts to share and watch the latest awesome videos. So join our awesome community to discover awesome videos every day.
                            </Header.Subheader>
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

export default SignupSection;