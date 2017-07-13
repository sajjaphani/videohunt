import React from 'react'
import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux'
import {history} from '../../store'

import HeaderContainer from '../../containers/Header'
import HomePage from '../HomePage'
import AddPostPage from '../AddPostPage'
import NotFoundPage from '../NotFoundPage'

const App = () => {
    {
        const mainStyle = {
            marginTop: "5em" //my change
        }
        const route='/'
        return (
            <div>
                <HeaderContainer />
                <Container style={mainStyle}>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/new-post" component={AddPostPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </ConnectedRouter>
                </Container>
            </div>
        )
    }
}

export default App