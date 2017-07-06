import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'


export default class PostItemLike extends React.Component {

    constructor() {
        super();
        
        this.state = {
            liked: false
        }; 
    }

    handleItemClick = (e) => {
        this.setState({ liked : !this.state.liked })
        console.log('Toggle Like: ' + this.state.liked)
    }

    render() { 
        const color = this.state.liked ? 'blue' : 'grey';
        console.log(color)
        return (

            <Button 
                basic color={color} size='tiny'
                onClick={this.handleItemClick}
            >
                <Icon name='like' />
                Like | {this.props.likes}
            </Button>
        )
    }
}