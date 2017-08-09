import { fork, all } from 'redux-saga/effects'

import { loginSaga } from './containers/App/sagas'
import { loadVideoSaga } from './containers/Feed/sagas'
import { logoutSaga } from './containers/Header/sagas'
import { loadMoreVideoSaga } from './containers/LoadFeed/sagas'

export default function* rootSaga() {
    yield all([
        fork(loadVideoSaga),
        fork(loadMoreVideoSaga),
        fork(logoutSaga),
    ])
}