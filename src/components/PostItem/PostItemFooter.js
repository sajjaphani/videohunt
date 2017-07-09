import React from 'react'

import PostItemLike from './PostItemLike'
import PostItemComment from './PostItemComment'
import PostItemWatchList from './PostItemWatchList'
import PostItemShare from './PostItemShare'

const PostItemFooter = props => (
    <div>
        <PostItemLike likes={props.likes} />
        <PostItemComment comments={props.comments} />
        <PostItemWatchList />
        <PostItemShare />
    </div>
)
export default PostItemFooter