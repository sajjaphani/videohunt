import { fork, all } from 'redux-saga/effects'

import { loginSaga } from './containers/App/sagas'
import { loadVideoSaga, loadMoreVideoSaga } from './containers/Feed/sagas'
import { logoutSaga } from './containers/Header/sagas'
import { postCommentSaga, commentReplySaga } from './containers/CommentForm/sagas'
import { likePostSaga, unlikePostSaga } from './containers/LikeButton/sagas'
import { addNewVideoSaga } from './containers/AddPostForm/sagas'

export default function* rootSaga() {
    yield all([
        fork(loadVideoSaga),
        fork(loadMoreVideoSaga),
        fork(logoutSaga),
        fork(postCommentSaga),
        fork(commentReplySaga),
        fork(likePostSaga),
        fork(unlikePostSaga),
        fork(addNewVideoSaga),
    ])
}