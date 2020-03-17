import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const AddPost = props => {
    const { isLoggedIn, activeSelection, changeSelection } = props
    if (isLoggedIn) {
        return (
            <Menu.Item name='post'
                active={activeSelection === 'post'}
                onClick={changeSelection}
                position='right'>
                    <Icon name='plus' size='large' />
            </Menu.Item>
        )
    } else {
        return (<div />)
    }
}

export default AddPost