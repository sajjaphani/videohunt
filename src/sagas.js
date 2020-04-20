import { fork, all } from 'redux-saga/effects'

import {
    logoutSaga, timedLogoutSaga, addSubsctiptionSaga, searchPostsSaga,
    loadFeedTopicsSaga, loadTagTopicsSaga, resetAppStateSaga,
    checkUserLoggedInSaga,
} from './containers/App/sagas'
import { loadVideoSaga, loadMoreVideoSaga } from './containers/Feed/sagas'
import { profileSaga, settingsSaga } from './containers/Header/sagas'
import { sidebarSelectionSaga } from './containers/Sidebar/sagas'
import { postCommentSaga, commentReplySaga } from './containers/CommentForm/sagas'
import { likePostSaga, unlikePostSaga } from './containers/LikeButton/sagas'
import { checkAddNewVideoSaga, backToHomeSaga } from './containers/AddPostForm/sagas'
import { addNewVideoSaga, redirectToFirstPageSaga, backToPrevPageSaga } from './containers/AddPostInfoForm/sagas'
import { likeCommentSaga, unlikeCommentSaga } from './containers/Comment/sagas'
import { loadPostSaga } from './containers/PostWrapper/sagas'
import { loadPostCommentsSaga, loadCommentRepliesSaga } from './containers/CommentsList/sagas'
import { loadRecommendationsSaga } from './containers/UpNext/sagas'

export default function* rootSaga() {
    yield all([
        fork(loadVideoSaga),
        fork(loadMoreVideoSaga),
        fork(logoutSaga),
        fork(timedLogoutSaga),
        fork(addSubsctiptionSaga),
        fork(searchPostsSaga),
        fork(loadFeedTopicsSaga),
        fork(loadTagTopicsSaga),
        fork(resetAppStateSaga),
        fork(checkUserLoggedInSaga),
        fork(profileSaga),
        fork(settingsSaga),
        fork(sidebarSelectionSaga),
        fork(postCommentSaga),
        fork(commentReplySaga),
        fork(likePostSaga),
        fork(unlikePostSaga),
        fork(checkAddNewVideoSaga),
        fork(backToHomeSaga),
        fork(redirectToFirstPageSaga),
        fork(backToPrevPageSaga),
        fork(addNewVideoSaga),
        fork(likeCommentSaga),
        fork(unlikeCommentSaga),
        fork(loadPostSaga),
        fork(loadPostCommentsSaga),
        fork(loadCommentRepliesSaga),
        fork(loadRecommendationsSaga),
    ])
}