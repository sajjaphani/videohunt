import React from 'react'
import { getPostIds } from './selectors'
import { connect } from 'react-redux'
import PostsList from '../../components/PostsList'

const mapStateToProps = (state, ownProps) => {
    return {
        postIds: getPostIds(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(PostsList)