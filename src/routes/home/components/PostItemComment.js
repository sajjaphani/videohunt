import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'

export default class PostItemComment extends React.Component {

    constructor() {
        super();
        
        this.state = {
            expand: false
        };
    }

    handleItemClick = (e) => {
        this.setState({ expand : !this.state.expand })
        console.log('Expand comments ' + this.state.expand)
    }

    render() {
        return (

            <Button 
                basic size='tiny'
                onClick={this.handleItemClick}
            >
                <Icon name='comment' />
                Comments | {this.props.comments}
            </Button>
        )
    }
}