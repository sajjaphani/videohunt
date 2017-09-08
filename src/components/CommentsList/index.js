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
        const { hasMore, nextPageUrl, postId, commentId, actions } = this.props
        if (hasMore) {
            if (commentId) {
                actions.loadCommentReplies(commentId, nextPageUrl)
            } else {
                actions.loadPostComments(postId, nextPageUrl)
            }
        }
    }

    render() {
        const { commentIds, postId, hasMore } = this.props
        const comments = this.computePostComments(commentIds, postId)
        let showMore = null
        let loader = null

        if (commentIds.size == 0 && !hasMore) {
            // If there are no comments to show and no more elements to fetch
            // return null
            return null
        }

        if (commentIds.size == 0 && hasMore) {
            // If initial comments are empty, but we have something to fetch
            // then show loading
            loader = (
                <Segment basic loading>
                    Loading comments...
                </Segment>
            )
        } else if (hasMore) {
            // If we still have more comments to fetch
            // add a show comments button
            showMore = <Comment.ShowMoreButton showMore={this.showMoreComments} />
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