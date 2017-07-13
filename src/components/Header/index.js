import React from 'react'
import { Menu, Container, Button, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import LoginModal from './LoginModal'
import UserAccount from './UserAccount'
import Logo from './Logo'
import Title from './Title'
import MoreAction from './MoreAction'
import AddPost from './AddPost'
import LoginWrapper from './LoginWrapper'

const Header = props => {
    const { activeSelection, loggedIn, changeSelection, handleLogin } = props
    console.log('selection', activeSelection)
    return (
        <Menu borderless fixed='top' size='small'>
            <Container>
                    <Menu.Item name='title'
                        active={false}
                        onClick={changeSelection}>
                        <Logo />
                        <Title />
                    </Menu.Item>
                <Menu.Menu position='right'>
                    <AddPost changeSelection={changeSelection} activeSelection={activeSelection} isLoggedIn={loggedIn} />
                    <Menu.Item name='userAccount'
                        active={false}>
                        <LoginWrapper handleLogin={handleLogin} isLoggedIn={loggedIn} />
                    </Menu.Item>
                </Menu.Menu>
                {/*<Menu.Menu position='right'>
                        <Menu.Item
                            name='login'
                        >
                            <LoginModal name='Login / Signup' />
                        </Menu.Item>
                        <Menu.Item
                            name='signup'
                        >
                            <LoginModal name='Signup'/>
                        </Menu.Item>
                    </Menu.Menu>*/}
            </Container>
        </Menu>
    );
}


export default Header