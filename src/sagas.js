import { fork, all } from 'redux-saga/effects'

import { loginSaga } from './containers/App/sagas'
import { loadVideoSaga, loadMoreVideoSaga } from './containers/Feed/sagas'
import { logoutSaga, profileSaga, settingsSaga } from './containers/Header/sagas'
import { postCommentSaga, commentReplySaga } from './containers/CommentForm/sagas'
import { likePostSaga, unlikePostSaga } from './containers/LikeButton/sagas'
import { addNewVideoSaga } from './containers/AddPostForm/sagas'
import {fetchCommentReplies, likeCommentSaga, unlikeCommentSaga} from './containers/Comment/sagas'
import { loadPostSaga } from './containers/PostWrapper/sagas'
import {loadPostCommentsSaga} from './containers/CommentsList/sagas'

export default function* rootSaga() {
    yield all([
        fork(loadVideoSaga),
        fork(loadMoreVideoSaga),
        fork(logoutSaga),
        fork(profileSaga),
        fork(settingsSaga),
        fork(postCommentSaga),
        fork(commentReplySaga),
        fork(likePostSaga),
        fork(unlikePostSaga),
        fork(addNewVideoSaga),
        fork(fetchCommentReplies),
        fork(likeCommentSaga),
        fork(unlikeCommentSaga),
        fork(loadPostSaga),
        fork(loadPostCommentsSaga)
    ])
}