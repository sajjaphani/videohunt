import React from 'react'
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class DayFeed extends React.Component {

    render() {
        return (
            <Header as='h3' >
                {this.props.title}
                <Header.Subheader>
                    {this.props.subtitle}
                </Header.Subheader>
            </Header>
        )
    }

}



