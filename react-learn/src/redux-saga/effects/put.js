import { createEffect } from '../effectHelp'
import { effectType } from '../effectHelp'

export function put(action) {

  return createEffect({
    type: effectType.put,
    payload: action
  })
}

export function runPut(value, env) {
  const res = env.store.dispatch(value.payload)
  env.runSagaTask(res)
}