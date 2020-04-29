import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Sidebar from '../../components/Sidebar'
import * as actions from './actions'
import { getActiveItem, getFeedTopics } from './selectors'

const mapStateToProps = (state, props) => {
    return {
        title: props.title,
        items: getFeedTopics(state),
        sidebarItemType: props.sidebarItemType,
        activeItem: props.activeItem ? props.activeItem : getActiveItem(state, props)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)