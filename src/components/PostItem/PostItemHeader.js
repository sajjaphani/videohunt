import React from 'react'
import { Header } from 'semantic-ui-react'

const DayFeed = props => (
    <Header as='h3' >
        {props.title}
        <Header.Subheader>
            {props.subtitle}
        </Header.Subheader>
    </Header>
)
export default DayFeed
