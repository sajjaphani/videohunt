import React from 'react'
import { connect } from 'react-redux'
import SettingsForm from '../../components/SettingsPage/SettingsForm'
import {updateSettings} from './actions'

const mapsStateToProps = (state, OwnProps) => {
    return {

    }
}

export default connect(mapsStateToProps, {
    updateSettings
})(SettingsForm)