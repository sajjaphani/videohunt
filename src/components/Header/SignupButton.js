import React from 'react'

import LoginModal from './LoginModal'

const LoginButton = props => (
    <LoginModal name='SIGN UP' openLogin={props.openLogin} open={props.open} handleLogin={props.handleLogin} loading={props.loginLoading} />
)

export default LoginButton