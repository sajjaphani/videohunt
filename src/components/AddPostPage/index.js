import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'

import AddPostFormContainer from '../../containers/AddPostForm'

export default class AddPostPage extends React.PureComponent {
    render() {
        return (
            <Grid>
                <Grid.Row >
                    <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                        <Container>
                        </Container>
                    </Grid.Column>
                    <Grid.Column mobile='sixteen' tablet='sixteen' computer='nine' largeScreen='nine' widescreen='nine'>
                        <AddPostFormContainer />
                    </Grid.Column>
                    <Grid.Column only='computer' computer='one' largeScreen='one' widescreen='one'>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}