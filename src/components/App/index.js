import React from 'react'
import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router';
import { push } from 'react-router-redux'

import HeaderContainer from '../../containers/Header'
import HomePage from '../HomePage'
import AddPostPage from '../AddPostPage'
import NotFoundPage from '../NotFoundPage'

const App = () => {
    {
        const mainStyle = {
            marginTop: "5em"
        }
        return (
            <div>
                <HeaderContainer />
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

export default App