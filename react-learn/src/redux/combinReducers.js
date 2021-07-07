
export function combineReducers(reducers) {
  return function (state = {}, action) {
    const newState = {}
    for (let key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        newState[key] = reducers[key](state[key], action)
      }
    }
    return newState
  }
}