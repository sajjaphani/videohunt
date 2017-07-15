import React from 'react'
import { Divider } from 'semantic-ui-react'
import LikeContainer from '../../containers/Like'
import CommentButton from './CommentButton'
import WatchListButton from './WatchListButton'
import ShareButton from './ShareButton'
import CommentSection from './CommentSection'

class PostFooter extends React.Component {
    constructor() {
        super()
        this.state = {
            expand: false
        }
        this.toggleComment = this.toggleComment.bind(this)
    }

    toggleComment(e) {
        e.preventDefault()
        const { expand } = this.state
        this.setState({
            expand: !expand
        })
    }
    render() {
        const { visible, likes, comments, postId } = this.props
        const sectionVisible = visible === undefined ? true : visible
        if (sectionVisible) {
            return (
                <div>
                    <Divider />
                    <LikeContainer postId={postId} likes={likes} />
                    <CommentButton comments={comments} toggleComment={this.toggleComment} />
                    <WatchListButton />
                    <ShareButton />
                    <CommentSection expand={this.state.expand} />
                </div>
            )
        } else {
            return (<div />)
        }
    }
}
export default PostFooter