import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import { feedReducer } from './containers/Feed/reducer';
import { headerReducer } from './containers/Header/reducer';
import { appReducer } from './containers/App/reducer'
import { upNextReducer } from './containers/UpNext/reducer'
import { postsReducer } from './containers/Post/reducer'
import { userReducer } from './containers/User/reducer'
import { commentsReducer } from './containers/CommentsSection/reducer'
import { newPostReducer } from './containers/AddPostForm/reducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app: appReducer,
  upNext: upNextReducer,
  header: headerReducer,
  feed: feedReducer,
  posts: postsReducer,
  users: userReducer,
  comments: commentsReducer,
  newPost: newPostReducer
});

export default createRootReducer