import { actionTypes,increase,decrease } from '../action/counter'
import { takeEvery,delay,put, fork, take, cancel, takeLatest, cancelled,race,call } from 'redux-saga/effects'




function* testRace(){
    yield race({
        autoIncrease:call(function* (){
            yield take(actionTypes.autoIncrease)
            while(true){
                yield delay(2000)
                yield put(increase())
            }
        }),
        stopIncrease: take(actionTypes.stopIncrease) 
    })
}


export default function* (){
    yield fork(testRace)
}