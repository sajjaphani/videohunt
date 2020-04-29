import React from 'react'
import { Grid } from 'semantic-ui-react'

import SignupSectionContainer from '../../containers/SignupSection'
import TopicFeedContainer from '../../containers/TopicFeed'
import FeedContainer from '../../containers/Feed'
import SidebarContainer from '../../containers/Sidebar'
import SubscribeFormContainer from '../../containers/SubscribeForm'

const HomePage = props => {

    let stickyStyle = {
        position: 'sticky',
        top: '7em'
    };
    const signupSectionStyle = { padding: '0em 1em 0 1em' };
    const gridStyle = { marginTop: '1em' };

    const topicId = getTopicFromMatch(props.match)
    const feedComponent = topicId === 'all' ? <FeedContainer topicId={topicId} /> : <TopicFeedContainer topicId={topicId} />

    return (
        <Grid>
            <Grid.Row style={signupSectionStyle}>
                <SignupSectionContainer />
            </Grid.Row>
            <Grid.Row style={gridStyle}>
                <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                    <div style={stickyStyle}>
                        <SidebarContainer sidebarItemType='feed' title='Feed' activeItem={topicId} />
                    </div>
                </Grid.Column>
                <Grid.Column mobile='sixteen' tablet='sixteen' computer='eight' largeScreen='eight' widescreen='eight'>
                    {feedComponent}
                </Grid.Column>
                <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four'>
                    <SubscribeFormContainer />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

function getTopicFromMatch(match) {
    if (match.path === '/') {
        return 'all'
    }

    return match.params.id
}

export default HomePage