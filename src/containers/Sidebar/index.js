import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Sidebar from '../../components/Sidebar'
import * as actions from './actions'
import { getActiveItem } from './selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        title: ownProps.title,
        items: ownProps.items,
        categoryType: ownProps.categoryType,
        activeItem: ownProps.activeItem ? ownProps.activeItem : getActiveItem(state, ownProps)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)