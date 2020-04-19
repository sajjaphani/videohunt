import React from 'react';

import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import jwt from 'jsonwebtoken';

import { store } from '../../store';
import { loginSuccess } from '../../containers/App/actions';
import setAuthToken from '../../utils/setAuthToken';

class ActivateAccount extends React.Component {

    componentDidMount() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        const token = params['session-token'];
        if (token) {
            localStorage.setItem('jwtToken', token)
            setAuthToken(token);
            const user = jwt.decode(localStorage.jwtToken)
            store.dispatch(loginSuccess(user))
        }

        this.props.history.push('/');
    }

    render() {
        return <div />
    }
}

export default withRouter(ActivateAccount);