import React from 'react'
import UserAccount from './UserAccount'
import LoginButton from './LoginButton'

const LoginWrapper = props => {
    const { isLoggedIn, loginLoading, handleLogout } = props
    if (isLoggedIn) {
        return <UserAccount userId={props.userId} handleLogout={handleLogout}/>
    } else {
        return <LoginButton handleLogin={props.handleLogin} loginLoading={loginLoading} />
    }
}

export default LoginWrapper