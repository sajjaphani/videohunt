import React from 'react'

import UserAccount from './UserAccount'
import LoginButton from './LoginButton'
import SignupButton from './SignupButton'

const LoginWrapper = props => {
    const { isLoggedIn, loginLoading, handleLogout, loginModalOpen, openLogin, handleProfile, handleSettings } = props
    if (isLoggedIn) {
        return (
            <UserAccount userId={props.userId} handleLogout={handleLogout} handleProfile={handleProfile} handleSettings={handleSettings} />
        )
    } else {
        return (
            <div>
                <LoginButton openLogin={openLogin} open={loginModalOpen} handleLogin={props.handleLogin} loginLoading={loginLoading} />
                <SignupButton openLogin={openLogin} open={loginModalOpen} handleLogin={props.handleLogin} loginLoading={loginLoading} />
            </div>
        )
    }
}

export default LoginWrapper