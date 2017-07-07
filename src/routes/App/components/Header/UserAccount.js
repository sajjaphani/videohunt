import React from 'react'
import { Image, Dropdown } from 'semantic-ui-react'

const UserAccount = props => {
    const trigger = (
        <span>
            <Image avatar src={props.imageUrl} /> Nischal
        </span>
    )
    const options = [
        { key: 'user', text: 'Account', icon: 'user' },
        { key: 'settings', text: 'Settings', icon: 'settings' },
        { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ]
    return (
        <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} />
    )
}

export default UserAccount