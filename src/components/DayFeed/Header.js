import React from 'react'
import { Header } from 'semantic-ui-react'
import moment from 'moment'

const DayFeedHeader = props => {
    const now = moment();
    const date = moment(props.date).calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        nextWeek: '[Next] dddd',
        sameElse: function () {
            if (this.year() === now.year()) {
                return 'MMMM Do'
            } else {
                return 'MMMM Do YYYY';
            }
        }
    });

    return (
        <Header size='small' className="ui-background">
            {date}
            <Header.Subheader>
                {props.dateAnnotation}
            </Header.Subheader>
        </Header>
    )
}

export default DayFeedHeader