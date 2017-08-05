import React from 'react'
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../../store'

import HeaderContainer from '../Header'
import HomePage from '../../components/HomePage'
import AddPostPage from '../../components/AddPostPage'
import NotFoundPage from '../../components/NotFoundPage'
import MainContent from '../../components/MainContent'

export default class AppContainer extends React.PureComponent {
    render() {
        return (
            <div>
                <HeaderContainer />
                <MainContent>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/post" component={AddPostPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </ConnectedRouter>
                </MainContent>
            </div>
        )
    }
}
