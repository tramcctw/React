
import isGenerator from "is-generator";
import isPromise from "is-promise"
import { effectSagaType } from './effectHelp'
import { handleEffect } from './effectHelp'

export default function sagaRun(env, effectFuncs, ...args) {
  const iterator = effectFuncs()
  if (isGenerator(iterator)) {
    runSagaTask()
  } else {
    throw new Error('不是一个生成器函数')
  }

  function runSagaTask(nextValue, err, isOver) {

    if (err) {
      throw new Error(err)
    }

    if (isOver) {
      return;
    }
    
    next(iterator.next(nextValue))

    function next(nextValue) {
      const { value, done } = nextValue

      if (done) {
        return runSagaTask(null, null, true)
      }

      if (value[effectSagaType]) {
        // saga副作用函数
        handleEffect(value, { ...env, runSagaTask})

      } else if (isPromise(value)) {
        try {
          value.then(res => {
            runSagaTask(res)
          }).catch(rej => {
            runSagaTask(rej)
          })
        } catch (err) {
          runSagaTask(null, err)
        }
      } else {
        runSagaTask(value)
      }
    }
  }

}
