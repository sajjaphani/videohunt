import React from 'react'

import InfiniteScroll from 'react-infinite-scroller';

import PostContainer from '../../containers/Post'
import DummyPost from '../DummyPost'

export default class CategoryFeed extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = { hasMore: true }
    }

    componentWillReceiveProps(nextProps) {
        const { postIds } = nextProps
        if (!postIds) {
            this.setState({ hasMore: true })
        }
    }

    loadPosts = () => {
        console.log('these are the props of category', this.props)
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
        const { postIds } = this.props
        const postList = computePostList(postIds)
        return (
            <div>
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
    console.log('these are the posts', posts)
    if (posts)
        return posts.map((postId) => <PostContainer key={postId} postId={postId} />)
    else
        return (<div />)
}