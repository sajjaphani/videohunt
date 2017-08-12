import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../../store'
import { bindActionCreators } from 'redux';

import HeaderContainer from '../Header'
import HomePage from '../../components/HomePage'
import AddPostPage from '../../components/AddPostPage'
import NotFoundPage from '../../components/NotFoundPage'
import MainContent from '../../components/MainContent'
import SignupSection from '../../components/SignupSection'
import { getLoggedIn } from './selectors.js'
import * as actions from './actions.js'

class AppContainer extends React.PureComponent {
    render() {
        return (
            <div>
                <HeaderContainer />
                <MainContent>
                    <SignupSection loggedIn={this.props.loggedIn} openLogin={this.props.actions.openLoginModal}/>
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

const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: getLoggedIn(state)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)