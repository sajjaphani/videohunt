import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Feed from '../../components/Feed'
import * as actions from './actions'
import { getAllPosts } from './selector'

class FeedContainer extends React.Component {

    componentWillMount() {
        if(this.props.posts.length == 0){
            this.props.actions.loadVideos();
        }
    }

    render() {
        return(
            <Feed posts={this.props.posts}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: getAllPosts(state)
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);