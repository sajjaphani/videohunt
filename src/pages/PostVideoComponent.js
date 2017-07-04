import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import VideoComponent from '../components/VideoComponent'
import PostItemHeader from '../components/PostItemHeader'
import PostItemFooter from './PostItemFooter'

import { Link } from 'react-router-dom';

export default class PostVideoComponent extends React.Component {

    render() {

        return (
            <div>
                <Divider />
                <VideoComponent url={this.props.post.url} />
                <Divider />

                <PostItemFooter likes={this.props.post.likes} comments={this.props.post.comments}/>
            </div>
        )
    }
}