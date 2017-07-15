import React from 'react'
import PostContainer from '../../containers/Post'

const PostsList = props => {
    const postItems = props.postIds.map((postId) => {
        return (
            <PostContainer key={postId} postId={postId} />
        )
    })
    return (
        <div>
            {postItems}
        </div>
    )
}

export default PostsList