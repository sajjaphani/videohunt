import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'


export default class PostItemFooter extends React.Component {

    render() {
        return (

            <Button icon basic floated='right' size='tiny'><Icon name='share' /></Button>

        )
    }

}