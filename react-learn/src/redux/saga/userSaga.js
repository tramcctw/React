import { SETLOADING } from '../action/usersAction'
import { take } from 'redux-saga/effects'
export default function* () {
    const action = yield take(SETLOADING)
    console.log('user',action)
}