import { compose } from './compose'

export default function applyMiddleware(...args) {

  return function (createStore) {

    return function (reducer, currState) {

      const store = createStore(reducer, currState);

      const simpleStore = {
        getState: store.getState,
        dispatch: store.dispatch,
      }

      const mids = args.map(mid => mid(simpleStore))

      const dispatch = compose(...mids)(store.dispatch)

      return {
        ...store,
        dispatch,
        // 注意，这里的dispatch是已经包装好的dispatch
      }
    }
  }
}