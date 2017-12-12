import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

import Comment from '../Comment'
import CommentContainer from '../../containers/Comment'

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
        const { commentIds, postId, hasMore, isLoading, isComment } = this.props
        const comments = this.computePostComments(commentIds, postId)
        let showMore = null
        let loader = null

        if (commentIds.size === 0 && !hasMore) {
            // If there are no comments to show and no more elements to fetch
            // return null
            return null
        }

        if (isComment && commentIds.size === 0 && hasMore) {
            return null
        }

        if (commentIds.size === 0 && hasMore) {
            // If initial comments are empty, but we have something to fetch
            // then show loading
            loader = (
                <Dimmer active inverted>
                    <Loader inverted>Loading...</Loader>
                </Dimmer>
            )
        } else if (hasMore) {
            // If we still have more comments to fetch
            // add a show comments button
            showMore = <Comment.ShowMoreButton showMore={this.showMoreComments} loading={isLoading} />
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