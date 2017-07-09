import { combineReducers } from 'redux';
import { postsReducer } from './containers/HomePage/reducer';
import { headerReducer } from './containers/Header/reducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    header: headerReducer
});

export default rootReducer