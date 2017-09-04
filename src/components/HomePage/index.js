import React from 'react'
import { Grid, Segment, Container, Input, Form, Header } from 'semantic-ui-react'

import FeedWrapperContainer from '../../containers/FeedWrapper'
import SidebarContainer from '../../containers/Sidebar'
import SubscribeFormContainer from '../../containers/SubscribeForm'

const HomePage = props => {
    const languages = ['All', 'English', 'Hindi', 'Telugu', 'Malayalam']
    const categories = ['All', 'Action', 'Comedy', 'Inspirational', 'Science', 'Short Films', 'Sports', 'Technology', 'Trailers', 'Viral']
    return (
        <Grid>
            <Grid.Row >
                <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                    <SidebarContainer categoryType='languages' title='Languages' items={languages} />
                    <SidebarContainer categoryType='feed' title='Feed' items={categories} />
                </Grid.Column>
                <Grid.Column mobile='sixteen' tablet='sixteen' computer='eight' largeScreen='eight' widescreen='eight'>
                    <FeedWrapperContainer />
                </Grid.Column>
                <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four'>
                    <SubscribeFormContainer />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default HomePage