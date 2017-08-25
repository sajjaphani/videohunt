import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'

import SettingsFormContainer from '../../containers/SettingsForm'

export default class SettingsPage extends React.PureComponent {
    render() {
        return (
            <Grid>
                <Grid.Row >
                    <Grid.Column mobile='sixteen' tablet='sixteen' computer='sixteen' largeScreen='sixteen' widescreen='sixteen'>
                        <SettingsFormContainer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}