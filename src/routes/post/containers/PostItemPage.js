import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import VideoComponent from '../../home/components/VideoComponent'
import PostItemHeader from '../../home/components/PostItemHeader'
import PostItemFooter from '../../home/containers/PostItemFooter'
import PostVideoComponent from '../../home/containers/PostVideoComponent'

import { Link } from 'react-router-dom';

import * as actions from '../../../actions/videoActions';

class PostItemPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: undefined
        };
    }

    // componentWillMount() {
    //     console.log('Inside componentWillMount')
    //     if (this.props.post.url === '') {
    //         this.props.actions.loadVideoByPostId(this.props.post.postId);
    //     }
    // }

    // componentWillReceiveProps(newProps) {
    //     console.log('Inside componentWillReceiveProps')
    //     console.log(newProps)
    //     this.setState({post:newProps})
    // }

    render() {
        console.log(this.props.post.postId)
        return (
            <Segment attached>
                <PostItemHeader title={this.props.post.title} subtitle={this.props.post.subtitle}/>

               <PostVideoComponent post={this.props.post} />
            </Segment>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state, ownProps) {
    console.log('state: ' + state)
    console.log(state.videos)
    console.log(ownProps)
    console.log(ownProps.match.params.item)
    const item = ownProps.match.params.item;

    if(state.videos.length <= 0)
        return {
            post: {
                postId:item,
                url:''
            }
        };

    // const filteredItems = state.videos.filter(video => {
    //     return video.posts.filter(post => post.postId === item)
    // });

    const post = state.videos.reduce(function (posts, video) {
        // console.log(posts)
        // console.log(video.posts)
        return posts.concat(video.posts)
    }, []).filter(post => post.postId === item);

    console.log(post)
    return {
        post:post[0]
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItemPage)