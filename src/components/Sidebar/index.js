import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

import './Sidebar.css';

export default class Sidebar extends React.PureComponent {

    componentDidMount() {
        this.props.actions.loadFeedTopics();
    }

    componentDidUpdate(_) {
        if (!this.props.items) {
            this.props.actions.loadFeedTopics();
        }
    }

    findItem(name) {
        return this.props.items.find(item => item.name === name)
    }

    handleItemClick = (e, { name }) => {
        const item = this.findItem(name);
        const catName = item ? item._id : 'all';
        const { categoryType } = this.props;
        this.props.actions.selectSidebarItem(categoryType, catName);
    }

    render() {
        const { items, title, activeItem } = this.props;
        let listItems = null;
        if (items) {
            listItems = items.map(item =>
                <Menu.Item
                    key={item._id}
                    name={item.name}
                    content={getMenuContent(item)}
                    active={activeItem === item._id}
                    onClick={this.handleItemClick}>
                </Menu.Item>
            )
        }

        const borderStyle = { borderRadius: '4px' }
        const className = activeItem === 'all' ? 'feed-segment feed-active' : 'feed-segment';
        const menuClassName = activeItem === 'all' ? 'feed-active' : '';

        return (
            <Container className="ui-background" style={borderStyle}>
                <div className={className}>
                    <Menu secondary vertical className={menuClassName}>
                        <Menu.Item
                            key='all'
                            name={title}
                            active={activeItem === 'all'}
                            onClick={this.handleItemClick}>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className='hr-line'></div>
                <Menu secondary vertical className="scrollable-list">
                    {listItems}
                </Menu>
            </Container>
        );
    }
}

const getMenuContent = (item) => (
    <div>
        <Image src={item.image} size='mini' avatar rounded style={{ borderRadius: '4px', maxHeight: '30px' }} />
        <span style={{ marginLeft: '5px', fontWeight: '500' }}>{item.name}</span>
    </div>
);