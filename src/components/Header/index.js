import React from 'react'
import { Menu, Container, Button, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import LoginModal from './LoginModal'
import UserAccount from './UserAccount'
import Logo from './Logo'
import Title from './Title'
import MoreAction from './MoreAction'
import AddPost from './AddPost'

const Header = props => {

    return (
        <Menu borderless fixed='top' size='small'>
            <Container>

                <Link to="/">
                    <Menu.Item name='editorials'>
                        <Logo/>
                        <Title/>
                    </Menu.Item>
                </Link>

                <Menu.Item name='morehunt' position='right'>
                    <MoreAction />
                </Menu.Item>

                <Link to="/new-post">
                    <Menu.Item name='addpost'>
                        <AddPost/>
                    </Menu.Item>
                </Link>

                <Menu.Item name='signup'>
                    <UserAccount imageUrl={'/images/boy.png'} />
                </Menu.Item>
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