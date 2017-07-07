import React from 'react'
import {connect} from 'react-redux'

import Header from '../components/Header'

class HeaderContainer extends React.Component {

    constructor() {
        super();
    }

    render() {
        <Header/>
    }
}

export default connect()(Header)