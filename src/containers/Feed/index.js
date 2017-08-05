import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Feed from '../../components/Feed'
import * as actions from './actions'
import { getFeed } from './selector'

function mapStateToProps(state) {
    return {
        feed: getFeed(state)
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);