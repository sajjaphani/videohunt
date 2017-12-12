import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import User from '../../containers/User'

export default class UserAccount extends React.PureComponent {

    state = { choice: '' }

    handleChange = (e, { value }) => {
        e.preventDefault()
        if (value === 'sign-out') {
            this.props.handleLogout()
        } else if (value === 'user') {
            this.props.handleProfile()
        } else if (value === 'settings') {
            this.props.handleSettings()
        }
    }

    render() {
        const trigger = (
            <User userId={this.props.userId} imageUrl={this.props.imageUrl} />
        )
        return (
            <Dropdown trigger={trigger} icon={null} pointing='top right'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Profile' icon='user' onClick={this.handleChange} value='user' />
                    <Dropdown.Divider />
                    <Dropdown.Item text='Settings' icon='settings' onClick={this.handleChange} value='settings' />
                    <Dropdown.Divider />
                    <Dropdown.Item text='Logout' icon='sign out' onClick={this.handleChange} value='sign-out'/>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}