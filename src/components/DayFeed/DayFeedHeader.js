import React from 'react'
import { Header } from 'semantic-ui-react'

const DayFeedHeader = props => (
    <Header as='h2' attached='top'>
        {props.date}
        <Header.Subheader>
            {props.dateAnnotation}
        </Header.Subheader>
    </Header>

)

export default DayFeedHeader