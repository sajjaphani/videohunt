import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import User from '../../containers/User'

export default class UserAccount extends React.PureComponent {
    
    handleChange = (e, data) => {
        // if (data === 'sign-out') {
            this.props.handleLogout()
        // }
    }
    render() {
        const trigger = (
            <User userId={this.props.userId} imageUrl={this.props.imageUrl} />
        )
        const options = [
            { key: 'user', text: 'Account', icon: 'user' },
            { key: 'settings', text: 'Settings', icon: 'settings' },
            { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
        ]

        return (
            <Dropdown trigger={trigger} value={'sasa'} options={options} pointing='top right' icon={null} onChange={this.handleChange} />
        )
    }
}