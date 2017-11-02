import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'

import SettingsForm from './SettingsForm'

export default class SettingsPage extends React.PureComponent {
    render() {
        return (
            <Grid>
                <Grid.Row >
                    <Grid.Column mobile='sixteen' tablet='sixteen' computer='sixteen' largeScreen='sixteen' widescreen='sixteen'>
                        <SettingsForm />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}