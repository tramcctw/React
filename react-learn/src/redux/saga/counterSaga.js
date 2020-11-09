import { actionTypes,increase,decrease } from '../action/counter'
import { takeEvery,delay,put, fork, take, cancel, takeLatest, cancelled } from 'redux-saga/effects'

function* asyncIncrease() {
    while(true){
        yield take(actionTypes.asyncIncrease)
        yield delay(2000);        // 不会阻塞action的传递，
        yield put(increase())     // 传入一个action，相当于两秒后再加一
    }
}

function* asyncDecrease() {
    let task;
    while (true) {
        yield take(actionTypes.asyncDecrease)
        if(task){
            console.log(task)
            yield cancel(task)
        }
        task = yield fork(function* () {
            yield delay(2000)
            yield put(decrease())
        }) 
    }
}

let task
function* autoIncrease() {
    while (true) {
        yield take(actionTypes.autoIncrease)
        task = yield fork(function* (){
            try {
                while (true) {
                    yield delay(2000)
                    yield put(increase())
                }
            }
            finally {
                // finally中的任务总是会被执行
                if(yield cancelled()){
                    console.log('当前任务线被取消')
                }
            }
        })
        yield take(actionTypes.stopIncrease)
        yield cancel(task)
    }
}

// function* autoIncrease() {
//     while (true) {
//         yield delay(2000)
//         yield put(increase())
//     }
// }



export default function* () {
    // let result =  yield 2;  // 普通数据之间放入next参数中继续执行
    // console.log(result)
    yield fork(asyncIncrease)
    yield fork(asyncDecrease)       // 开启一个线程去执行该函数 不阻塞
    // yield fork(autoIncrease)
    // yield takeEvery(actionTypes.asyncIncrease,asyncIncrease)
    // yield takeLatest(actionTypes.autoIncrease,autoIncrease)
    // 多次触发，会取消上一次的线程
    // console.log('111')
}