import React from 'react'
import axios from 'axios'

import Sidebar from '../../components/Sidebar'

export default class SidebarContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'All',
            visible: true
        };
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick = (e, {name}) => { 
        this.setState({ activeItem: name, visible: this.state.visible }) 
        axios.get('/api/v1/secure').then( response => {
            console.log('secure response ', response)
        })
    }

    componentWillMount() {
        this.setState({
            activeItem: this.state.activeItem,
            visible: this.props.visible || true
        })
    }

    render() {
        return (<Sidebar activeItem={this.state.activeItem} visible={this.state.visible} handleItemClick={this.handleItemClick}/>)
    }

}