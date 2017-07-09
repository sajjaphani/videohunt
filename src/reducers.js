import { combineReducers } from 'redux';
import posts from './containers/HomePage/reducer';

const rootReducer = combineReducers({
    videos: posts
});

export default rootReducer