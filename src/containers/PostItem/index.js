import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from './selectors'
import PostItem from '../../components/PostItem'

const mapStateToProps = (state, ownProps) => {
    return {
        posts: getPosts(state, ownProps)
    }
}

export default connect(mapStateToProps, {

})(PostItem)