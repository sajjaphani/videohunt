import { connect } from 'react-redux'
import { getUserName, getUserPicture } from './selectors'
import User from '../../components/User'

const mapStateToProps = (state, props) => {
    return {
        name: getUserName(state, props),
        picture: getUserPicture(state, props)
    }
}

export default connect(mapStateToProps, {

})(User)