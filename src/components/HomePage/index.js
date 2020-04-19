import React from 'react'
import { Grid } from 'semantic-ui-react'

import SignupSectionContainer from '../../containers/SignupSection'
import CategoryFeedContainer from '../../containers/CategoryFeed'
import FeedContainer from '../../containers/Feed'
import SidebarContainer from '../../containers/Sidebar'
import SubscribeFormContainer from '../../containers/SubscribeForm'
import { getFeedItems } from '../../utils/feed';

const HomePage = props => {

    let stickyStyle = {
        position: 'sticky',
        top: '7em'
    };
    const signupSectionStyle = { padding: '0em 1em 0 1em' };
    const gridStyle = { marginTop: '1em' };

    const categories = getFeedItems();
    const category = pathToCategoryName(props.match)
    const feedComponent = category === 'all' ? <FeedContainer category={category} /> : <CategoryFeedContainer feed={category} />

    return (
        <Grid>
            <Grid.Row style={signupSectionStyle}>
                <SignupSectionContainer />
            </Grid.Row>
            <Grid.Row style={gridStyle}>
                <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                    <div style={stickyStyle}>
                        <SidebarContainer categoryType='feed' title='Feed' items={categories} activeItem={category} />
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

function pathToCategoryName(match) {
    let category = ''
    if (match.path === '/') {
        category = 'all'
    } else {
        category = match.params.id
    }
    return category
}

export default HomePage