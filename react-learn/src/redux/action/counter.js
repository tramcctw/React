export const actionTypes = {
    increase:Symbol('increase'),
    decrease:Symbol('decrease'),
    asyncIncrease:Symbol('async-increase'),
    asyncDecrease:Symbol('async-decrease'),
    autoIncrease:Symbol('auto-increase'),
    stopIncrease:Symbol('stop-increase')
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