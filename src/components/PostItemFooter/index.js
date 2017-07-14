import React from 'react'
import { Divider } from 'semantic-ui-react'
import PostItemLike from './PostItemLike'
import PostItemComment from './PostItemComment'
import PostItemWatchList from './PostItemWatchList'
import PostItemShare from './PostItemShare'

const PostItemFooter = props => {
    const visible = props.visible === undefined ? true : props.visible
    if (visible) {
        return (
            <div>
                <Divider />
                <PostItemLike likes={props.likes} />
                <PostItemComment comments={props.comments} />
                <PostItemWatchList />
                <PostItemShare />
            </div>
        )
    } else {
        return (<div />)
    }
}
export default PostItemFooter