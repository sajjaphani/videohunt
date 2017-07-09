import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const plusStyle = {
    "letterSpacing": "2px",
    marginTop: "5px"
}

const AddPost = props => {
    const { isLoggedIn, activeSelection, changeSelection } = props
    if (isLoggedIn) {
        return (
            <Menu.Item name='addPost'
                active={activeSelection === 'addPost'}
                onClick={changeSelection}
                position='right'>
                <Link to="/new-post">
                    <div> &#x2795; </div>
                </Link>
            </Menu.Item>
        )
    } else {
        return (<div />)
    }
}

export default AddPost