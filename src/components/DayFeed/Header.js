import React from 'react'
import { Header } from 'semantic-ui-react'
import moment from 'moment'

const DayFeedHeader = props => {
    const date = moment(props.date).calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'MMMM Do YYYY'
    });
    return (
        <Header as='h2' attached='top' color='grey'>
            {date}
            <Header.Subheader>
                {props.dateAnnotation}
            </Header.Subheader>
        </Header>
    )
}

export default DayFeedHeader