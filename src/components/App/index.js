import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Header'
import HomePage from '../HomePage'
import AddPostPage from '../AddPostPage'
import NotFoundPage from '../NotFoundPage'

export default class App extends React.Component {
    render() {
        const mainStyle = {
            marginTop: "5em"
        }
        return (
            <div>
                <Header />
                <Container style={mainStyle}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/new-post" component={AddPostPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Container>
            </div>
        )
    }
}