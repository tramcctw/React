import { call, delay, put, select, takeEvery, fork } from "../../redux-saga/effects"
import { getStudents } from '../../services/student'
import { setStudentsAndTotal } from '../../store/action/student/searchResult'
import { actionTypes } from '../action/student/searchResult'

// function test(...rest) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve('success!!')
//             } else {
//                 reject('fail!!')
//             }
//         },2000)
//     })
// }
/**
* saga任务
*/

// function* asyncIncrease() {
//     console.log('saga 开始了')
//     yield 123
//     yield delay(3000)
//     yield put(increase())
//     const ret = yield call(getStudents)
//     yield put(setStudentsAndTotal(ret.findByPage, ret.cont))
//     const res = yield select()
//     console.log(res)
// }

function* testFork() {
    yield delay(10000)
    console.log('hello fork')
}


function* getAllStudent() {
    console.log('saga 开始了')
    yield fork(testFork)
    const ret = yield call(getStudents)
    yield put(setStudentsAndTotal(ret.findByPage, ret.cont))
    const res = yield select()
    console.log(res)
}



export default function* () {
    yield takeEvery(actionTypes.fetchStudents, getAllStudent);
}