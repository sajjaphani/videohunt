import React from 'react'
import { List, Segment, Divider } from 'semantic-ui-react'

export default class Sidebar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.activeItem,
        };
    }

    handleItemClick = (e, { name }) => {
        console.log('This item selected ', name)
        this.setState({ activeItem: name })
    }

    componentWillMount() {
        this.setState({
            activeItem: this.state.activeItem,
        })
    }

    render() {
        const { items, title } = this.props
        const listItems = items.map(item =>
            <List.Item
                key={item}
                name={item}
                active={this.state.activeItem === item}
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