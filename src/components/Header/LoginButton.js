import React from 'react'
import { Button } from 'semantic-ui-react'

import LoginModal from './LoginModal'

const LoginButton = props => (
    <LoginModal name='LOGIN / SIGN UP' openLogin={props.openLogin} open={props.open} handleLogin={props.handleLogin} loading={props.loginLoading} />
)

export default LoginButton