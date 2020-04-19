import { connect } from 'react-redux'
import AddPostForm from '../../components/AddPostPage/AddPostForm'
import { checkAddNewVideoPost, backToHomePage } from './actions'

import { getDuplicatePost, getErrorData } from './selectors'

const mapsStateToProps = (state, ownProps) => {
    return {
        duplicatePost: getDuplicatePost(state),
        errorData: getErrorData(state),
    }
}

export default connect(mapsStateToProps, {
    checkAddNewVideoPost, backToHomePage
})(AddPostForm)