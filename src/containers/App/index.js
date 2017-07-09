import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../../components/App'

export default class AppContainer extends React.Component {
    render() {
        return (<App/>)
    }
}