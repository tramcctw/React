export const actionTypes = {
    increase:'INCRASE',
    decrease:'DECREASE',
    asyncIncrease:'ASYNC_INCREASRE',
    asyncDecrease:'ASYNC_DECREASE',
    autoIncrease:'AUTO_INCREASE',
    stopIncrease:'STOP_DECREASE'
}

export function  increase() {
    return {
        type:actionTypes.increase
    }
}

export function  decrease() {
    return {
        type:actionTypes.decrease
    }
}

export function asyncIncrease() {
    return {
        type:actionTypes.asyncIncrease
    }
}

export function  asyncDecrease() {
    return {
        type:actionTypes.asyncDecrease
    }
}

export function autoIncrease() {
    return {
        type:actionTypes.autoIncrease
    }
}

export function stopIncrease() {
    return {
        type:actionTypes.stopIncrease
    }
}