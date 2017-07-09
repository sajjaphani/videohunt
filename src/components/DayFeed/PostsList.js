import React from 'react'
import PostItem from '../PostItem'

const PostsList = props => {
    console.log(props.posts)
    const postItems = props.posts.map((post) => {
        return (
            <PostItem key={post.postId} post={post} />
        )
    })
    return (
        <div>
            {postItems}
        </div>
    )
}

export default PostsList