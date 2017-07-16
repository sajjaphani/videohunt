import React from 'react'
import { Divider } from 'semantic-ui-react'
import LikeButtonContainer from '../../containers/LikeButton'
import CommentButtonContainer from '../../containers/CommentButton'
import WatchListButton from './WatchListButton'
import ShareButton from './ShareButton'
import CommentsSectionContainer from '../../containers/CommentsSection'

class PostFooter extends React.Component {
    render() {
        const { visible, likes, comments, postId } = this.props
        const sectionVisible = visible === undefined ? true : visible
        if (sectionVisible) {
            return (
                <div>
                    <Divider />
                    <LikeButtonContainer postId={postId} likes={likes} />
                    <CommentButtonContainer postId={postId} comments={comments} />
                    <WatchListButton />
                    <ShareButton />
                    <CommentsSectionContainer postId={postId} comments={comments} />
                </div>
            )
        } else {
            return (<div />)
        }
    }
}
export default PostFooter