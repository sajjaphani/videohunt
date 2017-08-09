import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions'
import { getPagination } from './selector'
import LoadFeed from '../../components/LoadFeed'

function mapStateToProps(state) {
    return {
        nextPage: getPagination(state)
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadFeed);