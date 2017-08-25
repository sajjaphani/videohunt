import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'

import ProfileSectionContainer from '../../containers/ProfileSection'
import ProfileSidebarContainer from '../../containers/ProfileSidebar'
import ProfileHeaderContainer from '../../containers/ProfileHeader'

export default class ProfilePage extends React.PureComponent {
    render() {
        return (
            <Grid>
                <Grid.Row only='mobile tablet'>
                    <Grid.Column >
                        <Container>
                            <ProfileSidebarContainer />
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column >
                        <Container>
                            <ProfileHeaderContainer />
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                        <Container>
                            <ProfileSidebarContainer />
                        </Container>
                    </Grid.Column>
                    <Grid.Column mobile='sixteen' tablet='sixteen' computer='twelve' largeScreen='twelve' widescreen='twelve'>
                        <ProfileSectionContainer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}