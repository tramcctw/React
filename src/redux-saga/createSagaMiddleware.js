import sagaRun from './sagaRun'
import Channel from './channel'

export default function createSagaMiddleware() {
  
  return function sagaMid(store) {

    const env = {
      store,
      Channel:new Channel()
    }
  
    sagaMid.run = sagaRun.bind(null,env)
  
    return function (next) {
      return function (action) {
        env.Channel.fork(action.type)
        next(action)      
      }
    }
  }
}