import { connect } from 'react-redux'
import FeedPosts from '../../components/FeedPosts'
import { getPostIds } from './selectors'

const mapStateToProps = (state, props) => {
    return {
        postIds: getPostIds(state, props) 
    }
}

export default connect(mapStateToProps, {

})(FeedPosts)
