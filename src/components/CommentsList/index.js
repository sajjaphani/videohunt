import React from 'react'
import { Container, Loader } from 'semantic-ui-react'

import Comment from '../Comment'
import CommentContainer from '../../containers/Comment'

export default class CommentsList extends React.PureComponent {

    computePostComments = (commentIds, postId, isReply) => {
        const parentCommentId = this.props.commentId;
        return commentIds.map((commentId) => {
            const klassName = isReply ? 'hunt-reply' : 'hunt-comment';
            return (
                <div key={commentId} className={klassName}>
                    <CommentContainer isReply={isReply} postId={postId} commentId={commentId} parentCommentId={parentCommentId} />
                </div>
            )
        })
    }

    componentDidMount() {
        this.fireFetchCommentsAction()
    }

    showMoreComments = () => {
        this.fireFetchCommentsAction()
    }

    fireFetchCommentsAction() {
        const { hasMore, nextPageUrl, postId, commentId, actions } = this.props;
        if (hasMore) {
            if (commentId) {
                actions.loadCommentReplies(commentId, nextPageUrl)
            } else {
                actions.loadPostComments(postId, nextPageUrl)
            }
        }
    }

    render() {
        const { commentIds, postId, hasMore, isLoading, isComment, loggedIn, isReply } = this.props;
        const comments = this.computePostComments(commentIds, postId, isReply)
        let showMore = null
        let loader = null

        if (commentIds.size === 0 && !hasMore) {
            // If there are no comments to show and no more elements to fetch
            // return null
            if (loggedIn) {
                return <div />
            }

            return <div key={0} style={{ color: '#ffffff' }}>There are no comments yet!</div>
        }

        if (isComment && commentIds.size === 0 && hasMore) {
            return null
        }

        if (commentIds.size === 0 && hasMore) {
            // If initial comments are empty, but we have something to fetch
            // then show loading
            loader = (
                <Container>
                    <Loader size='small' active inline='centered'></Loader>
                </Container>
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