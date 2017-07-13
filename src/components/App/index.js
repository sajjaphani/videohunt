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
            marginTop: "5em"
        }
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


const Public = () => <h3>Public</h3>
const Login = () => <h3>Login</h3>

export default App