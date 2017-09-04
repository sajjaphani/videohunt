import React from 'react'
import { List, Segment, Divider } from 'semantic-ui-react'

export default class Sidebar extends React.PureComponent {

    handleItemClick = (e, { name }) => {
        const { categoryType } = this.props
        this.props.actions.selectSidebarItem(categoryType, name)
    }

    render() {
        const { items, title, activeItem } = this.props
        const listItems = items.map(item =>
            <List.Item
                key={item}
                name={item}
                active={activeItem === item}
                onClick={this.handleItemClick}>
                <List.Content>{item}</List.Content>
            </List.Item>
        )
    
        return (
            <Segment>
                <List verticalAlign='middle'>
                    <List.Item>
                        <List.Header>{title} <List.Content as='a' floated='right'>Edit</List.Content></List.Header>
                    </List.Item>
                </List>
                <Divider />
                <List selection verticalAlign='middle'>
                    {listItems}
                </List>
            </Segment>
        );
    }
}