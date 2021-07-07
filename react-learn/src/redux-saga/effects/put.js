import { createEffect } from '../effectHelp'
import { effectType } from '../effectHelp'

export function put(action) {

  return createEffect({
    type: effectType.put,
    payload: action
  })
}

export function runPut(value, env) {
  // 这里触发的action 不经过中间件，直接给了原生的dispatch
  // 还是那个问题
  const res = env.store.dispatch(value.payload)
  env.runSagaTask(res)
}