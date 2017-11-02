import React from 'react'
import UserAccount from './UserAccount'
import LoginButton from './LoginButton'
import Notifications from './Notifications'

const LoginWrapper = props => {
    const { isLoggedIn, loginLoading, handleLogout, loginModalOpen, openLogin, handleProfile, handleSettings } = props
    if (isLoggedIn) {
        return <div>
            <Notifications />
            <UserAccount userId={props.userId} handleLogout={handleLogout} handleProfile={handleProfile} handleSettings={handleSettings} />
        </div>
    } else {
        return <LoginButton openLogin={openLogin} open={loginModalOpen} handleLogin={props.handleLogin} loginLoading={loginLoading} />
    }
}

export default LoginWrapper