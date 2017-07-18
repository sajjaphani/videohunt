import { all } from 'redux-saga/effects'

import { loginSaga } from './containers/App/sagas'

export default function* rootSaga() {
    yield all([
        loginSaga()
    ])
}