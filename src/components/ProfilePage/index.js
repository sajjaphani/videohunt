import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

import ProfileSection from './ProfileSection'
import ProfileSidebar from './ProfileSidebar'
import ProfileHeader from './ProfileHeader'

export default class ProfilePage extends React.PureComponent {
    render() {
        return (
            <Grid>
                <Grid.Row only='mobile tablet'>
                    <Grid.Column >
                        <Container>
                            <ProfileSidebar />
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column >
                        <Container>
                            <ProfileHeader />
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                        <Container>
                            <ProfileSidebar />
                        </Container>
                    </Grid.Column>
                    <Grid.Column mobile='sixteen' tablet='sixteen' computer='twelve' largeScreen='twelve' widescreen='twelve'>
                        <ProfileSection />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}