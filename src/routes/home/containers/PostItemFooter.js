import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import PostItemLike from '../components/PostItemLike'
import PostItemComment from '../components/PostItemComment'
import PostItemShare from '../components/PostItemShare'
import PostItemWatchList from '../components/PostItemWatchList'

export default class PostItemFooter extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (

            <div>
                <PostItemLike likes={this.props.likes} />
                <PostItemComment comments={this.props.comments} />
                <PostItemWatchList />
                <PostItemShare />
            </div>
        )
    }

}