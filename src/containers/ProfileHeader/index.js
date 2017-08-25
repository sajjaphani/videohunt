import React from 'react'
import { connect } from 'react-redux'
import ProfileHeader from '../../components/ProfilePage/ProfileHeader'
import {handleProfileHeader} from './actions'

const mapsStateToProps = (state, OwnProps) => {
    return {

    }
}

export default connect(mapsStateToProps, {
    handleProfileHeader
})(ProfileHeader)