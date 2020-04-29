import { connect } from 'react-redux'
import { getTitle, getAuthor, getURL, getTopics, getProvider, getEmbed, getUserId, getPostedOn, getDescription } from './selectors'
import PostItem from '../../components/PostItem'

const mapStateToProps = (state, props) => {
    return {
        postId: props.postId,
        expandComments: props.expandComments,
        title: getTitle(state, props),
        author: getAuthor(state, props),
        url: getURL(state, props),
        topics: getTopics(state, props),
        provider: getProvider(state, props),
        embed: getEmbed(state, props),
        userId: getUserId(state, props),
        postedOn: getPostedOn(state, props),
        description: getDescription(state, props),
    }
}

export default connect(mapStateToProps, {

})(PostItem)