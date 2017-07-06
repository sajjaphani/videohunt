import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'


export default class PostItemLike extends React.Component {

    constructor() {
        super();
        
        this.state = {
            watchlist: false
        };
    }

    handleItemClick = (e) => {
        this.setState({ watchlist : !this.state.watchlist })
        console.log('Add to watchlist ' + this.state.watchlist)
    }

    render() {
        return (

            <Button 
                icon basic size='tiny' 
                floated='right'
                onClick={this.handleItemClick}
            >
                <Icon name='content' />
            </Button>
        )
    }
}