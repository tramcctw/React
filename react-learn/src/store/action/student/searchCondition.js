
export const actionTypes = {
    change: Symbol("change")
}

export function change(newCondition) {
    return {
        type: actionTypes.change,
        payload: newCondition
    }
}