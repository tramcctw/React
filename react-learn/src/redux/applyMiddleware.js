import { compose } from './compose'

export default function applyMiddleware(...args) {

  return function (createStore) {

    return function (reducer, currState) {

      const store = createStore(reducer, currState);

      const simpleStore = {
        getState: store.getState,
        dispatch: store.dispatch,
      }

      // 这里的simpleStore里面的dispatch要传入的是包装好的dispatch
      // 但是不传simpleStore怎么得到包装好的dispatch呢

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