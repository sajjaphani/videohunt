import React from 'react'
import { connect } from 'react-redux'
import AddPostForm from '../../components/AddPostPage/AddPostForm'
import {addNewVideoPost} from './actions'

const mapsStateToProps = (state, OwnProps) => {
    return {

    }
}

export default connect(mapsStateToProps, {
    addNewVideoPost
})(AddPostForm)