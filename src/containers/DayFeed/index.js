import { connect } from 'react-redux'
import DayFeedPosts from '../../components/DayFeedPosts'
import { getPostIds } from './selectors'

const mapStateToProps = (state, props) => {
    return {
        postIds: getPostIds(state, props) 
    }
}

export default connect(mapStateToProps, {

})(DayFeedPosts)

