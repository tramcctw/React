import isPromise from 'is-promise'
import { createEffect, effectType } from '../effectHelp'

export function call(...args) {

  const fn = args[0]
  const rest = args.splice(1)
  
  return createEffect({
    type: effectType.call,
    fn,
    rest
  })

}

export function runCall(payload, env) {
  const { fn, rest } = payload
  const ret = fn(...rest)
  if (isPromise(ret)) {
    ret.then(res => {
      env.runSagaTask(res)
    }).catch(rej => {
      env.runSagaTask(rej)
    })
  } else {
    env.runSagaTask(ret)
  }
}