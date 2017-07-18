import React from 'react'
import UserAccount from './UserAccount'
import LoginButton from './LoginButton'

const LoginWrapper = props => {
    const { isLoggedIn, loginLoading } = props
    if (isLoggedIn) {
        return <UserAccount imageUrl={'/images/boy.png'} />
    } else {
        return <LoginButton handleLogin={props.handleLogin} loginLoading={loginLoading} />
    }
}

export default LoginWrapper