import React from 'react'
import { Header } from 'semantic-ui-react'

export default class DayFeed extends React.Component {

    render() {
        return (
                <Header as='h2' attached='top'>
                    {this.props.date}
                    <Header.Subheader>
                        {this.props.dateAnnotation}
                    </Header.Subheader>
                </Header>
                
        )
    }

}