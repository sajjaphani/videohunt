import React from 'react'
import { connect } from 'react-redux'
import { getPostId, getTitle, getSubtitle, getURL } from './selectors'
import Post from '../../components/Post'
import PostFooterContainer from '../PostFooter'

class PostContainer extends React.PureComponent {
    render() {
        const { title, subtitle, url, postId } = this.props
        return (
            <Post>
                <Post.Header title={title} subtitle={subtitle} />
                <Post.Video url={url} />
                <Post.Footer>
                    <PostFooterContainer postId={postId}/>
                </Post.Footer>
            </Post>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        title: getTitle(state, ownProps),
        subtitle: getSubtitle(state, ownProps),
        url: getURL(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(PostContainer)