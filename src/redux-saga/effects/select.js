import { createEffect } from '../effectHelp'
import { effectType } from '../effectHelp'

export function select(fn) {
  return createEffect({
    type: effectType.select,
    payload: fn
  })
}

export function runSelect(value, env) {
  
  if (value.payload) {
    const fn = value.payload
    env.runSagaTask(fn(env.store.getState()))
  } else {
    env.runSagaTask(env.store.getState())
  }
}