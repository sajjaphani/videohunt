import React from 'react';

import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { store } from '../../store';
import { loginSuccess, changeRoute } from '../../containers/App/actions';

class ActivateAccount extends React.Component {

    componentDidMount() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        const token = params['session-token'];
        if (token) {
            localStorage.setItem('jwtToken', token)
            store.dispatch(loginSuccess())
        }

        store.dispatch(changeRoute('/'));
    }

    render() {
        return <div />
    }
}

export default withRouter(ActivateAccount);