import React from 'react'
import { connect } from 'react-redux'
import AddPostInfoForm from '../../components/AddPostInfoPage/AddPostInfoForm'
import { addNewVideoPost, redirectToFirstPage } from './actions'
import { getNewPost } from './selectors'

const mapsStateToProps = (state, ownProps) => {
    return {
        newPost: getNewPost(state)
    }
}

export default connect(mapsStateToProps, {
    addNewVideoPost, redirectToFirstPage
})(AddPostInfoForm)