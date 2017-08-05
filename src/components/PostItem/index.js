import React from 'react'
import Post from '../Post'
import PostFooterContainer from '../../containers/PostFooter'

export default class PostContainer extends React.PureComponent {
    render() {
        const { title, subtitle, url, postId } = this.props
        return (
            <Post>
                <Post.Header title={title} subtitle={subtitle} />
                <Post.Video url={url} />
                <PostFooterContainer postId={postId}/>
            </Post>
        )
    }
}
