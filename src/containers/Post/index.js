import { connect } from 'react-redux'
import { getTitle, getAuthor, getURL, getCategory, getProvider, getEmbed, getUserId, getPostedOn, getDescription } from './selectors'
import PostItem from '../../components/PostItem'

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
        expandComments: ownProps.expandComments,
        title: getTitle(state, ownProps),
        author: getAuthor(state, ownProps),
        url: getURL(state, ownProps),
        category: getCategory(state, ownProps),
        provider: getProvider(state, ownProps),
        embed: getEmbed(state, ownProps),
        userId: getUserId(state, ownProps),
        postedOn: getPostedOn(state, ownProps),
        description: getDescription(state, ownProps),
    }
}

export default connect(mapStateToProps, {

})(PostItem)