import { SETLOADING,FETCHSTUDENTS,setLoading, setUser } from '../action/usersAction'
import { put, take,takeEvery,call, apply, select, cps } from 'redux-saga/effects'
import {getAllStudents} from '../../service/student'

function  mock(condition,callback) {
    console.log(condition)
    setTimeout(() => {
        if(Math.random() > 0.5){
            callback(null,{
                data:'hello'
            })
        }else{
            callback(new Error('error'),null)
        }
    }, 2000);
}

function* fetchStudents() {
    yield put(setLoading(true))
    // 当saga发现结果是一个promise时，会将then后的结果返回
    // 如果promise reject则saga调用generator.thorw()
    console.log(yield select(state=>state.counterReducer))  //获得仓库里的数据,
    const result = yield call({
        context:'abc',  // 绑定this
        fn:getAllStudents
    })  //call帮忙调用函数，统一使用指令,绑定this
    // const result = yield apply(null,getAllStudents,['参数'])
    yield put(setUser(result))

    const res =  yield cps(mock,111)  // 出错会generator.thorw()，反之返回callback的回调
    console.log(res)
    yield put(setLoading(false))
    // console.log(result)
}


export default function* () {
    // const action = yield take(SETLOADING)
    yield takeEvery(FETCHSTUDENTS,fetchStudents)
    // console.log('user',action)
}