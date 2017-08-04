import React from 'react'
import { connect } from 'react-redux'
import DayFeed from '../../components/DayFeed'
import PostContainer from '../../containers/Post'
import { getPostIds } from './selectors'

class DayFeedContainer extends React.PureComponent {
    render() {
        const { date, postIds } = this.props
        const postsList = computePostsList(postIds)
        return (
            <DayFeed date={date}>
                {postsList}
            </DayFeed>
        )
    }
}

const computePostsList = (postIds) => {
    const postItems = postIds.map((postId) => {
        return (
            <PostContainer key={postId} postId={postId} />
        )
    })
    return postItems
}

const mapStateToProps = (state, ownProps) => {
    return {
        postIds: getPostIds(state, ownProps) 
    }
}

export default connect(mapStateToProps, {

})(DayFeedContainer)

