import React from 'react'
import UserAccount from './UserAccount'
import LoginButton from './LoginButton'

const LoginWrapper = props => {
    const { isLoggedIn, loginLoading, handleLogout, loginModalOpen, openLogin, handleProfile, handleSettings } = props
    if (isLoggedIn) {
        return <UserAccount userId={props.userId} handleLogout={handleLogout} handleProfile={handleProfile} handleSettings={handleSettings}/>
    } else {
        return <LoginButton openLogin={openLogin} open={loginModalOpen} handleLogin={props.handleLogin} loginLoading={loginLoading} />
    }
}

export default LoginWrapper