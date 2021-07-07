
export function combineReducers(reducers) {
  const newState = {}
  return function (state = {}, action) {
    for (let key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        newState[key] = reducers[key](state[key], action)
      }
    }
    return newState
  }
}