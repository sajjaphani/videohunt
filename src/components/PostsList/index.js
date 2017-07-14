import React from 'react'
import PostItemContainer from '../../containers/PostItem'

const PostsList = props => {
    const postItems = props.postIds.map((postId) => {
        return (
            <PostItemContainer key={postId} postId={postId} />
        )
    })
    return (
        <div>
            {postItems}
        </div>
    )
}

export default PostsList