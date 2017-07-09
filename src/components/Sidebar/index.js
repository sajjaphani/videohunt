import React from 'react'
import { List, Segment, Divider } from 'semantic-ui-react'

const Sidebar = props => {
    const mainStyle = {
        display: props.visible ? "block" : "none"
    }
    const activeItem = props.activeItem
    return (
        <Segment style={mainStyle}>
            <List verticalAlign='middle'>
                <List.Item>
                    <List.Header>Feed <List.Content as='a' floated='right'>Edit</List.Content></List.Header>
                </List.Item>
            </List>
            <Divider />
            <List selection verticalAlign='middle'>
                <List.Item
                    name='All'
                    active={activeItem === 'All'}
                    onClick={props.handleItemClick}>
                    <List.Content>All</List.Content>
                </List.Item>
                <List.Item
                    name='English'
                    active={activeItem === 'English'}
                    onClick={props.handleItemClick}>
                    <List.Content>English</List.Content>
                </List.Item>
                <List.Item
                    name='Telugu'
                    active={activeItem === 'Telugu'}
                    onClick={props.handleItemClick}>
                    <List.Content>Telugu</List.Content>
                </List.Item>
                <List.Item
                    name='Hindi'
                    active={activeItem === 'Hindi'}
                    onClick={props.handleItemClick}>
                    <List.Content>Hindi</List.Content>
                </List.Item>
            </List>
        </Segment>
    );
}

export default Sidebar