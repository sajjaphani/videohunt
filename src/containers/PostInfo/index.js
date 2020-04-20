import { connect } from 'react-redux'
import { getUserName, getUserPicture } from './selectors'

import PostInfo from '../../components/PostInfo'

const mapStateToProps = (state, props) => {
    return {
        name: getUserName(state, props),
        picture: getUserPicture(state, props),
        postedOn: props.postedOn
    }
}

export default connect(mapStateToProps, {

})(PostInfo)