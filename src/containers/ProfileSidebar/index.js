import React from 'react'
import { connect } from 'react-redux'
import ProfileSidebar from '../../components/ProfilePage/ProfileSidebar'
import {handleProfileSidebar} from './actions'

const mapsStateToProps = (state, OwnProps) => {
    return {

    }
}

export default connect(mapsStateToProps, {
    handleProfileSidebar
})(ProfileSidebar)