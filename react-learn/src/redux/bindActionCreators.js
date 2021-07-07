
export function bindActionCreators(actionCreators, dispatch) {
  const actions = {}
  for (let action in actionCreators) {
    if (actionCreators.hasOwnProperty(action)) {
      actions[action] = function (args) {
        dispatch(actionCreators[action](args))
      }
    }
  }
  return actions
}