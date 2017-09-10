import React from 'react'
import { Grid, Segment, Container, Input, Form, Header } from 'semantic-ui-react'

import CategoryFeedContainer from '../../containers/CategoryFeed'
import FeedContainer from '../../containers/Feed'
import SidebarContainer from '../../containers/Sidebar'
import SubscribeFormContainer from '../../containers/SubscribeForm'

const HomePage = props => {
    const languages = ['All', 'English', 'Hindi', 'Telugu', 'Malayalam']
    const categories = ['All', 'Action', 'Comedy', 'Inspirational', 'Science', 'Short Films', 'Sports', 'Technology', 'Trailers', 'Viral']
    const category = pathToCategoryName(props.match)
    const feedComponent = category == 'All' ? <FeedContainer category={category} /> : <CategoryFeedContainer feed={category} />
    return (
        <Grid>
            <Grid.Row >
                <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                    <SidebarContainer categoryType='languages' title='Languages' items={languages}/>
                    <SidebarContainer categoryType='feed' title='Feed' items={categories} activeItem={category}/>
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
    if (match.path == '/') {
        category = 'All'
    } else {
        category = match.params.id
    }
    return category
}

export default HomePage