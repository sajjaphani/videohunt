import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import User from '../../containers/User'

const UserAccount = props => {
    const trigger = (
        <User userId={props.userId} imageUrl={props.imageUrl} />
    )
    const options = [
        { key: 'user', text: 'Account', icon: 'user' },
        { key: 'settings', text: 'Settings', icon: 'settings' },
        { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ]
    return (
        <Dropdown trigger={trigger} options={options} pointing='top right' icon={null} />
    )
}

export default UserAccount