import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

import Logo from './Logo'
import Title from './Title'
import AddPost from './AddPost'
import Notifications from './Notifications'
import LoginWrapper from './LoginWrapper'
import Search from './SearchComponent';

import './Header.css';

export default class Header extends React.PureComponent {

    componentDidMount() {
        this.props.getUserSession();
    }

    componentDidUpdate(_) {
        if (this.props.canCheckLoggedIn) {
            this.props.getUserSession();
        }
    }

    render() {
        const { activeSelection, loggedIn, changeSelection,
            handleLogin, loginLoading, handleLogout, loginModalOpen,
            openLogin, handleProfile, handleSettings } = this.props;

        const notificationsMenuItem = getNotificationMenuItem(loggedIn);

        const { searchResults, handleTextSearch, isLoadingResults, changeRoute } = this.props;
        const searchElt = <Search isLoadingResults={isLoadingResults} results={searchResults} 
                                    handleTextSearch={handleTextSearch} changeRoute={changeRoute} />;

        return (
            <Menu borderless fixed='top' size='small' className="ui-background">
                <Container>
                    <Menu.Item name='home'
                        active={false}
                        onClick={changeSelection}>
                        <Logo full={true} />
                        <Title show={false} />
                    </Menu.Item>
                    <Menu.Item name='search' active={false}>
                        {searchElt}
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <AddPost changeSelection={changeSelection} activeSelection={activeSelection} isLoggedIn={loggedIn} />
                        <Menu.Item>
                            {notificationsMenuItem}
                        </Menu.Item>
                        <Menu.Item name='userAccount'
                            active={false}>
                            {/* TODO: Create a container for Login wrapper*/}
                            <LoginWrapper
                                openLogin={openLogin}
                                loginModalOpen={loginModalOpen}
                                handleLogin={handleLogin}
                                isLoggedIn={loggedIn}
                                userId={this.props.loggedInUserId}
                                loginLoading={loginLoading}
                                handleLogout={handleLogout}
                                handleProfile={handleProfile}
                                handleSettings={handleSettings}
                            />
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        );
    }
}

const getNotificationMenuItem = (isLoggedIn) => {
    if (isLoggedIn) {
        return <Notifications />
    } else {
        return <div />
    }
}
