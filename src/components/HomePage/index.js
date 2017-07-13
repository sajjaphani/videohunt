import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'

import FeedContainer from '../../containers/Feed'
import SidebarContainer from '../../containers/Sidebar'

const HomePage = props => {
    return (
        <Grid>
            <Grid.Row >
                <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                    <Container>
                        <SidebarContainer/>
                    </Container>
                </Grid.Column>
                <Grid.Column mobile='sixteen' tablet='sixteen' computer='nine' largeScreen='nine' widescreen='nine'>
                    <FeedContainer />
                </Grid.Column>
                <Grid.Column only='computer' computer='one' largeScreen='one' widescreen='one'>
                </Grid.Column>
            </Grid.Row>
        </Grid> 
    )
}

export default HomePage