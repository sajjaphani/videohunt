import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Feed from '../../components/Feed'
import * as actions from './actions'
import { getFeed } from './selector'

class FeedContainer extends React.PureComponent {

    componentWillMount() {
        // TODO: refactor to add isLoaded state
        if(this.props.feed.length == 0){
            this.props.actions.loadVideos();
        }
    }

    render() {
        return(
            <Feed feed={this.props.feed} />
        )
    }
}

function mapStateToProps(state) {
    return {
        feed: getFeed(state)
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);