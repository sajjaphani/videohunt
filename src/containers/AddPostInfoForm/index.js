import { connect } from 'react-redux'
import AddPostInfoForm from '../../components/AddPostInfoPage/AddPostInfoForm'
import { addNewVideoPost, redirectToFirstPage, backToPrevPage, loadTagTopics } from './actions'
import { getNewPost, getTagTopics } from './selectors'

const mapsStateToProps = (state, ownProps) => {
    return {
        newPost: getNewPost(state),
        tags: getTagTopics(state)
    }
}

export default connect(mapsStateToProps, {
    addNewVideoPost, redirectToFirstPage, backToPrevPage, loadTagTopics
})(AddPostInfoForm)