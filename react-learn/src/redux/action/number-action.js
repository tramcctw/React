import * as actionType from './action-type'

export function  getIncreaseAction() {
    return {
        type:actionType.INCREASE
    }
}

export function getSetAction(number) {
    return {
        type:actionType.SET,
        payload:number
    }
}

