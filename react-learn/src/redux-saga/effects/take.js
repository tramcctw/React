import { createEffect, effectType } from '../effectHelp'

export function take(actionType) {
  return createEffect({
    type: effectType.take,
    actionType
  })
}


export function runTake(value,env) {
  env.Channel.take(value.actionType, action => {
    env.runSagaTask(action)
  })
}