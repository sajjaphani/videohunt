import { combineReducers } from 'redux';
import { feedReducer } from './containers/Feed/reducer';
import { headerReducer } from './containers/Header/reducer';
import { appReducer } from './containers/App/reducer'
import { routerReducer } from 'react-router-redux'
import { postsReducer } from './containers/PostsList/reducer'

const rootReducer = combineReducers({
    app: appReducer,
    header: headerReducer,
    router: routerReducer,
    feed: feedReducer,
    posts: postsReducer
});

export default rootReducer