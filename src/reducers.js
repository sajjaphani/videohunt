import { combineReducers } from 'redux';
import { postsReducer } from './containers/HomePage/reducer';
import { headerReducer } from './containers/Header/reducer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    posts: postsReducer,
    header: headerReducer,
    router: routerReducer
});

export default rootReducer