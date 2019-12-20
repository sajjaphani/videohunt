import React from 'react'
import { Header } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller';

import PostContainer from '../../containers/Post'
import DummyPost from '../DummyPost'
import EmptyFeed from '../EmptyFeed';

import getDisplayName from '../../utils/feed-to-name'

export default class CategoryFeed extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = { hasMore: true }
    }

    componentWillReceiveProps(nextProps) {
        const { postIds, nextPage } = nextProps
        // if there are no posts or if there is a next page url
        // then this component has more items
        if (!postIds || nextPage) {
            this.setState({ hasMore: true })
        }
    }

    componentDidUpdate() {

    }

    loadPosts = () => {
        console.log('P here', this.props);
        const { feed } = this.props
        if (this.props.postIds) {
            // if posts exist try to fetch next videos
            if (this.props.nextPage) {
                this.props.actions.loadMoreVideos(feed, this.props.nextPage)
            } else {
                this.setState({ hasMore: false })
            }
        } else {
            // otherwise fetch initial videos
            this.props.actions.loadVideos(feed);
        }
    }

    render() {
        const { postIds, feed } = this.props
        const postList = computePostList(postIds)
        return (
            <div>
                <Header as='h2' attached='top' color='grey'>{getDisplayName(feed)}</Header>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadPosts}
                    hasMore={this.state.hasMore}
                    loader={<DummyPost />}
                >
                    {postList}
                </InfiniteScroll>
            </div>
        )
    }
}

function computePostList(posts) {
    console.log('Posts', posts);
    if (posts && posts.length > 0)
        return posts.map((postId) => <PostContainer key={postId} postId={postId} />)
    else
        return (<EmptyFeed />)
}