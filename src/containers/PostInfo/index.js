import { connect } from 'react-redux'
import { getUserName, getUserPicture } from './selectors'

import PostInfo from '../../components/PostInfo'

const mapStateToProps = (state, ownProps) => {
    return {
        name: getUserName(state, ownProps),
        picture: getUserPicture(state, ownProps),
        postedOn: ownProps.postedOn
    }
}

export default connect(mapStateToProps, {

})(PostInfo)