import React from 'react'
import DayFeed from '../../components/DayFeed'

export default class DayFeedContainer extends React.PureComponent {
    render() {
        return (<DayFeed date={this.props.date} />)
    }
}