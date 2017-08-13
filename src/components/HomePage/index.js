import React from 'react'
import { Grid, Segment, Container, Input, Form, Header } from 'semantic-ui-react'

import FeedContainer from '../../containers/Feed'
import Sidebar from '../Sidebar'
import SubscribeFormContainer from '../../containers/SubscribeForm'

const HomePage = props => {
    const languages = ['All', 'English', 'Hindi', 'Telugu', 'Malayalam']
    const categories = ['All', 'Action', 'Comedy', 'Inspirational', 'Science', 'Short Films', 'Sports', 'Technology', 'Trailers', 'Viral']
    return (
        <Grid>
            <Grid.Row >
                <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                    <Sidebar title='Languages' items={languages} activeItem={'All'} />
                    <Sidebar title='Feed' items={categories} activeItem={'All'} />
                </Grid.Column>
                <Grid.Column mobile='sixteen' tablet='sixteen' computer='eight' largeScreen='eight' widescreen='eight'>
                    <FeedContainer />
                </Grid.Column>
                <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four'>
                    <SubscribeFormContainer />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default HomePage