import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HeaderContainer from '../../containers/Header'
import HomePage from '../HomePage'
import AddPostPage from '../AddPostPage'
import NotFoundPage from '../NotFoundPage'

export default class App extends React.Component {
    render() {
        const mainStyle = {
            marginTop: "5em" //my change
        }
        const route='/'
        return (
            <div>
                <HeaderContainer/>
                <Container style={mainStyle}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/new-post" component={AddPostPage} />
                        <Route component={NotFoundPage} />
                        <Redirect to={route}/>
                </Container>
            </div>
        )
    }
}