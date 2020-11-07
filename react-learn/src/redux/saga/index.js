import { all } from 'redux-saga/effects'
import counterSaga from './counterSaga'
import userSaga from './userSaga'
export default function* sagaTask() {
    yield all([counterSaga(),userSaga()])
    console.log('over')
}