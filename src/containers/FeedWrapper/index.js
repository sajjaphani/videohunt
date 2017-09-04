import React from 'react'
import { connect } from 'react-redux'
import FeedWrapper from '../../components/FeedWrapper'
import { getLanguages, getFeed } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        language: getLanguages(state),
        feed: getFeed(state)
    }
}

export default connect(mapStateToProps, {

})(FeedWrapper)

