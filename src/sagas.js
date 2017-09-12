import { fork, all } from 'redux-saga/effects'

import { loginSaga } from './containers/App/sagas'
import { loadVideoSaga, loadMoreVideoSaga } from './containers/Feed/sagas'
import { logoutSaga, profileSaga, settingsSaga } from './containers/Header/sagas'
import { postCommentSaga, commentReplySaga } from './containers/CommentForm/sagas'
import { likePostSaga, unlikePostSaga } from './containers/LikeButton/sagas'
import { checkAddNewVideoSaga } from './containers/AddPostForm/sagas'
import { addNewVideoSaga, redirectToFirstPageSaga } from './containers/AddPostInfoForm/sagas'
import { likeCommentSaga, unlikeCommentSaga } from './containers/Comment/sagas'
import { loadPostSaga } from './containers/PostWrapper/sagas'
import { loadPostCommentsSaga, loadCommentRepliesSaga } from './containers/CommentsList/sagas'

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
        fork(checkAddNewVideoSaga),
        fork(redirectToFirstPageSaga),
        fork(addNewVideoSaga),
        fork(likeCommentSaga),
        fork(unlikeCommentSaga),
        fork(loadPostSaga),
        fork(loadPostCommentsSaga),
        fork(loadCommentRepliesSaga)
    ])
}