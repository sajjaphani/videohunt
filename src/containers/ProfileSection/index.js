import React from 'react'
import { connect } from 'react-redux'
import ProfileSection from '../../components/ProfilePage/ProfileSection'
import {handleProfileSection} from './actions'

const mapsStateToProps = (state, OwnProps) => {
    return {

    }
}

export default connect(mapsStateToProps, {
    handleProfileSection
})(ProfileSection)