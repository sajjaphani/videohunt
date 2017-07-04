import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import VideoComponent from '../components/VideoComponent'
import PostItemHeader from '../components/PostItemHeader'
import PostItemFooter from './PostItemFooter'
import PostVideoComponent from './PostVideoComponent'

import { Link } from 'react-router-dom';

export default class PostItem extends React.Component {

    render() {

        console.log('PostItem: ' + this.props)
        return (
            <Segment attached>
                <Link to={'/posts/'+this.props.post.postId}>
                    <PostItemHeader title={this.props.post.title} subtitle={this.props.post.subtitle}/>
                </Link>

                <PostVideoComponent post={this.props.post} />
            </Segment>
        )
    }
}