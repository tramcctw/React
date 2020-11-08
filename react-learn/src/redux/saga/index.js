import { all } from 'redux-saga/effects'
import counterSaga from './counterSaga'
import userSaga from './userSaga'
import counter from './counter_copy'

export default function* sagaTask() {
    yield all([counterSaga(),userSaga(),counter()])
    console.log('over')
}