import React from 'react'

import { Grid, Segment, Container } from 'semantic-ui-react'

import MainContent from './containers/MainContent'
import Sidebar from './containers/Sidebar'

export default class Home extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row >
                    <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                        <Container>
                            <Sidebar visible={true} />
                        </Container>
                    </Grid.Column>
                    <Grid.Column mobile='sixteen' tablet='sixteen' computer='nine' largeScreen='nine' widescreen='nine'>
                        <MainContent />
                    </Grid.Column>
                    <Grid.Column only='computer' computer='one' largeScreen='one' widescreen='one'>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}