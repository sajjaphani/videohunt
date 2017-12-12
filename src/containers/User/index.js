import { connect } from 'react-redux'
import { getUserName, getUserPicture } from './selectors'
import User from '../../components/User'

const mapStateToProps = (state, ownProps) => {
    return {
        name: getUserName(state, ownProps),
        picture: getUserPicture(state, ownProps)
    }
}

export default connect(mapStateToProps,{

})(User)