import React from 'react'
import { Button } from 'semantic-ui-react'
const LoginButton = props => (<Button name='login' onClick={props.handleLogin} primary>Login</Button>)

export default LoginButton