import actionTypes from './utils/actionTyeps'
import isPlainObject from './utils/isPlainObject'

export default function createStore(reducer, defaultState, enhance) {

  let currState = {}
  let prevState = {}
  let listens = []

  if (typeof defaultState === 'function') {
    return defaultState(createStore)(reducer, currState)
  } else if (defaultState) {
    currState = defaultState
  }
  if (typeof enhance === 'function') {
    return enhance(createStore)(reducer, currState)
  }

  function dispatch(action) {
    if (!action.type) {
      throw new Error('action must has property of type')
    }

    if (!isPlainObject(action)) {
      throw new Error('action must is plain object')
    }
    prevState = currState 
    currState = reducer(currState, action)
    for (let lis of listens) {
      lis(prevState, currState)
    }
  }

  function subScribe(funcs) {
    listens.push(funcs)
    let isRemove = false
    return function () {
      if (!isRemove) {
        listens = listens.filter(it => it !== funcs)
      }
      isRemove = true
    }
  }
  function getState() {
    return currState;
  }

  dispatch(actionTypes.init())

  return {
    subScribe,
    dispatch,
    getState
  }
}