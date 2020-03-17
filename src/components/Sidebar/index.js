import React from 'react';
import { Header, Segment, Divider, Menu, Container } from 'semantic-ui-react';

import './Sidebar.css';

export default class Sidebar extends React.PureComponent {

    handleItemClick = (e, { name }) => {
        const { categoryType } = this.props;
        this.props.actions.selectSidebarItem(categoryType, name);
    }

    normalizeKey = (item) => {
        return item.toLowerCase().replace(/ /g, "-");
    }

    render() {
        const { items, title, activeItem } = this.props
        const listItems = items.map(item =>
            <Menu.Item
                key={item}
                name={this.normalizeKey(item)}
                active={activeItem === this.normalizeKey(item)}
                onClick={this.handleItemClick}>
            </Menu.Item>
        )

        const borderStyle = { borderRadius: '4px' }

        return (
            <Container className="ui-background" style={borderStyle}>
                <Segment className="feed-segment">
                    <Header size='small'>{title}</Header>
                </Segment>
                <Divider />
                <Menu secondary vertical className="scrollable-list">
                    {listItems}
                </Menu>
            </Container>
        );
    }
}