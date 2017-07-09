import React from 'react'

import { Grid, Segment, Container } from 'semantic-ui-react'

import AddPostForm from './AddPostForm'

export default class AddPostPage extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row >
                    <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                        <Container>

                        </Container>
                    </Grid.Column>
                    <Grid.Column mobile='sixteen' tablet='sixteen' computer='nine' largeScreen='nine' widescreen='nine'>
                        <AddPostForm />
                    </Grid.Column>
                    <Grid.Column only='computer' computer='one' largeScreen='one' widescreen='one'>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}