import React from 'react'
import { Menu } from 'semantic-ui-react'

const AddPost = props => {
    const { isLoggedIn, activeSelection, changeSelection } = props
    if (isLoggedIn) {
        return (
            <Menu.Item name='post'
                active={activeSelection === 'post'}
                onClick={changeSelection}
                position='right'>
                    <span role="img" aria-label="Add post"> &#x2795; </span>
            </Menu.Item>
        )
    } else {
        return (<div />)
    }
}

export default AddPost