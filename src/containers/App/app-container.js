import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router';
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
import { getLoggedIn } from './selectors.js'
import * as actions from './actions.js'
import { history } from '../../store'

class AppContainer extends React.PureComponent {
    componentDidMount() {
        this.props.actions.loadUserPreferences();
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <MainContent loggedIn={this.props.loggedIn}>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route path="/topics/:id" component={HomePage} />
                            <Route exact path="/posts/new" component={AddPostPage} />
                            <Route path="/posts/new/info" component={AddPostInfoPage} />
                            <Route path="/posts/:id" component={PostPage} />
                            <Route path="/profile" component={ProfilePage} />
                            <Route path="/settings" component={SettingsPage} />
                            <Route path="/login/success" component={ActivateAccount} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </ConnectedRouter>
                </MainContent>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: getLoggedIn(state)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)