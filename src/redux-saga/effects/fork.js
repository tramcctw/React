import { effectType, createEffect } from '../effectHelp'
import sagaRun from '../sagaRun'

export function fork(generatorFuncs) {
  return createEffect({
    type: effectType.fork,
    generatorFuncs,
  })
}

export function runFork(value, env) {
  const task = sagaRun(env, value.generatorFuncs)
  env.runSagaTask(task)
}