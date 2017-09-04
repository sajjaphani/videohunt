import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CategoryFeed from '../../components/CategoryFeed'
import { getLanguages, getFeedCategory, getPostIds, getPagination } from './selectors'
import * as actions from '../Feed/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        language: getLanguages(state),
        feed: getFeedCategory(state),
        postIds: getPostIds(state),
        nextPage: getPagination(state)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFeed)

