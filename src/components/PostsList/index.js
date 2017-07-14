import React from 'react'
import PostItemContainer from '../../containers/PostItem'

const PostsList = props => {
    console.log('total posts',props.postIds)
    const postItems = props.posts.map((postId) => {
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