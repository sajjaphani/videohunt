import React from 'react'

import LoginModal from './LoginModal'

const LoginButton = props => (
    <LoginModal inverted={true} name='LOG IN' openLogin={props.openLogin} open={props.open} handleLogin={props.handleLogin} loading={props.loginLoading} />
)

export default LoginButton