import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

export default class Notifications extends React.PureComponent {
    render() {
        const trigger = (
            <span>
                <Icon size='large' circular name='bell' /> &nbsp;
          </span>
        )

        return (
            <Dropdown trigger={trigger} icon={null} pointing='top right'>
                <Dropdown.Menu>
                    <Dropdown.Header icon='tags' content='Nothing hear, yet!' />
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}