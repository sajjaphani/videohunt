import { connect } from 'react-redux'
import CommentButton from '../../components/CommentButton'
import { toggleComment } from './actions'
import { isExpandComments, getTotalComments } from './selectors'

const mapStateToProps = (state, props) => {
    const { postId } = props
    return {
        postId: postId,
        commentNo: getTotalComments(state, props),
        expandComments: isExpandComments(state, props)
    }
}

export default connect(mapStateToProps, {
    toggleComment
})(CommentButton)
