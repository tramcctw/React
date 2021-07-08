import * as effectAll from './effects/'

export const effectSagaType = '@@redux-saga/IO'

export const effectType = {
  call: 'call',
  put: 'put',
  select: 'select',
  delay: 'delay',
  fork: "fork",
  take: "take",
  takeEvery: "takeEvery",
}

export function createEffect(effectAtion) {
  if (!Object.values(effectType).includes(effectAtion.type)) {
    throw new Error('There is no such instruction');
  } else {
    return {
      [effectSagaType]:true,
      ...effectAtion
    }
  }
}

export function handleEffect(value,env) {
  switch (value.type) {
    case 'call':
      effectAll.runCall(value,env);
      break;
    case 'put':
      effectAll.runPut(value,env);
      break;
    case 'select':
      effectAll.runSelect(value,env);
      break;
    case 'take':
      effectAll.runTake(value, env);
      break;
    case 'fork':
      effectAll.runFork(value, env);
      break;
    default:
      throw new Error('not has this type')
  }
}