import React from 'react'

import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../home'
import AddPost from '../../addPost'
import PostPage from '../../post'
import NotFound from '../../notFound'

export default class MainContent extends React.Component {
    render() {
        const mainStyle = {
            marginTop: "5em"
        }
        return (
            <Container style={mainStyle}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/new-post" component={AddPost} />
                    <Route path="/posts/:item" component={PostPage} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        )
    }
}