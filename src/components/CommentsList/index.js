import React from 'react'
import { Segment, Dimmer, Loader, Button } from 'semantic-ui-react'

import Comment from '../Comment'
import CommentContainer from '../../containers/Comment'
import CommentFormContainer from '../../containers/CommentForm'

export default class CommentsList extends React.PureComponent {

    computePostComments = (commentIds, postId) => (
        commentIds.map((commentId) => {
            return (
                <CommentContainer key={commentId} postId={postId} commentId={commentId} />
            )
        })
    )

    componentDidMount() {
        this.fireFetchCommentsAction()
    }

    showMoreComments = () => {
        this.fireFetchCommentsAction()
    }

    fireFetchCommentsAction() {
        const { hasMore, nextPageUrl, postId, actions } = this.props
        if (hasMore) {
            actions.loadPostComments(postId, nextPageUrl)
        }
    }

    render() {
        const { commentIds, postId, hasMore } = this.props
        const comments = this.computePostComments(commentIds, postId)
        let showMore = null
        let loader = null
        if (commentIds.size == 0 && hasMore) {
            // show loading
            loader = (
                <Segment basic loading>
                    Loading comments...
                </Segment>
            )
        } else if (hasMore) {
            // show comments
            showMore = <Comment.ShowMoreButton showMore={this.showMoreComments}/>
        }
        return (
            <div>
                {comments}
                {showMore}
                {loader}
            </div>

        )
    }

}