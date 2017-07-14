import { combineReducers } from 'redux';
import { postsReducer } from './containers/Feed/reducer';
import { headerReducer } from './containers/Header/reducer';
import { appReducer } from './containers/App/reducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    feed: postsReducer,
    header: headerReducer,
    router: routerReducer,
    app: appReducer
});

export default rootReducer