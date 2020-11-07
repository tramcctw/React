import { actionTypes,increase,decrease } from '../action/counter'
import { takeEvery,delay,put } from 'redux-saga/effects'

function* asyncIncrease() {
    yield delay(2000);        // 不会阻塞action的传递，
    yield put(increase())     // 传入一个action，相当于两秒后再加一
    console.log('asyncIncrease')
}

function* asyncDecrease() {
    console.log('asyncDecrease');
}



export default function* () {
    // let result =  yield 2;  // 普通数据之间放入next参数中继续执行
    // console.log(result)

    yield takeEvery(actionTypes.asyncDecrease,asyncDecrease)
    yield takeEvery(actionTypes.asyncIncrease,asyncIncrease)
    console.log('111')
}