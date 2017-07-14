import React from 'react'
import { connect } from 'react-redux'
import { getPost } from './selectors'
import PostItem from '../../components/PostItem'

const mapStateToProps = (state, ownProps) => {
    return {
        post: getPost(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(PostItem)