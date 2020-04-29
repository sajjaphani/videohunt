import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import { bindActionCreators } from 'redux';

import HeaderContainer from '../Header'
import HomePage from '../../components/HomePage'
import AddPostPage from '../../components/AddPostPage'
import AddPostInfoPage from '../../components/AddPostInfoPage'
import PostPage from '../../components/PostPage'
import NotFoundPage from '../../components/NotFoundPage'
import ProfilePage from '../../components/ProfilePage'
import SettingsPage from '../../components/SettingsPage'
import LoginPage from '../../components/LoginPage'
import ActivateAccount from '../../components/ActivateAccount'
import MainContent from '../../components/MainContent'
import AppLoader from '../../components/App/Loader';

import { getLoggedIn, isFetchingAuth } from './selectors.js'
import * as actions from './actions.js'
import { history } from '../../store'

function AuthIsLoaded({ fetchingAuth, children }) {
    if (fetchingAuth)
        return <AppLoader />;

    return children
}

const ProtectedRoute
    = ({ loggedIn, ...props }) =>
        loggedIn
            ? <Route {...props} />
            : <Redirect to="/login" />;

class AppContainer extends React.PureComponent {
    componentDidMount() {
        this.props.actions.loadUserPreferences();
        this.props.actions.loadTagTopics();
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <MainContent loggedIn={this.props.loggedIn}>
                    <ConnectedRouter history={history}>
                        <AuthIsLoaded fetchingAuth={this.props.fetchingAuth}>
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/login" component={LoginPage} />
                                <Route path="/topics/:id" component={HomePage} />
                                <ProtectedRoute exact path="/posts/new" component={AddPostPage} loggedIn={this.props.loggedIn} />
                                <Route path="/posts/new/info" component={AddPostInfoPage} />
                                <Route path="/posts/:id" component={PostPage} />
                                <ProtectedRoute path="/profile" component={ProfilePage} loggedIn={this.props.loggedIn} />
                                <ProtectedRoute path="/settings" component={SettingsPage} loggedIn={this.props.loggedIn} />
                                <Route path="/login/success" component={ActivateAccount} />
                                <Route component={NotFoundPage} />
                            </Switch>
                        </AuthIsLoaded>
                    </ConnectedRouter>
                </MainContent>
            </div>
        )
    }
}

const mapStateToProps = (state, _) => {
    return {
        loggedIn: getLoggedIn(state),
        fetchingAuth: isFetchingAuth(state)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)