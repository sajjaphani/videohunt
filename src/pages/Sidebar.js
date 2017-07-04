import React from 'react'
import { List, Image, Segment, Container, Button, Label, Divider } from 'semantic-ui-react'

export default class Sidebar extends React.Component {
    constructor() {
        super();
        
        this.state = {
            activeItem: 'All',
            visible: false
        };
    }

    handleItemClick = (e, {name}) => { 
        console.log('Item clicked:' + name)
        this.setState({ activeItem: name, visible: this.state.visible }) 
    }

    componentWillMount() {
        console.log('componentWillMount inside Sidebar')
        console.log(this.props.visible);
        this.setState({
            activeItem: this.state.activeItem,
            visible: this.props.visible || false
        })
    }

    render() {
        const mainStyle = {
            display: this.state.visible ? "block" : "none"
        }

        const activeItem = this.state.activeItem
        return (
            <Segment  style={mainStyle}>
                <List verticalAlign='middle'>
                    <List.Item>
                        <List.Header>Feed <List.Content as='a' floated='right'>Edit</List.Content></List.Header>
                    </List.Item>
                </List>
                <Divider />
                <List selection verticalAlign='middle'>
                    {/*<List.Item>
                        Feed
                        
                        <List.Content as='a' floated='right'>
                            Edit
                        </List.Content>
                    </List.Item>*/}
                    <List.Item
                        name='All'
                        active={activeItem === 'All'}
                        onClick={this.handleItemClick}
                    >
                        {/*<Image avatar src='./images/female.png' />*/}
                        <List.Content>All</List.Content>
                    </List.Item>
                    <List.Item
                        name='English'
                        active={activeItem === 'English'}
                        onClick={this.handleItemClick}
                    >
                        {/*<Image avatar src='./images/female.png' />*/}
                        <List.Content>English</List.Content>
                    </List.Item>
                    <List.Item
                        name='Telugu'
                        active={activeItem === 'Telugu'}
                        onClick={this.handleItemClick}
                    >
                        {/*<Image avatar src='./images/man1.png' />*/}
                        <List.Content>Telugu</List.Content>
                    </List.Item>
                    <List.Item
                        name='Hindi'
                        active={activeItem === 'Hindi'}
                        onClick={this.handleItemClick}
                    >
                        {/*<Image avatar src='./images/boy.png' />*/}
                        <List.Content>Hindi</List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }

}