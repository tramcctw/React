
export default class Channel {
  
  constructor() {
    this.listenner = {}
  }

  take(actionType, fn) {
    if (this.listenner[actionType]) {
      this.listenner[actionType].push(fn)
    } else {
      this.listenner[actionType] = [fn]
    }
  }

  fork(actionType) {
    if (this.listenner[actionType]) {
      const funcs = this.listenner[actionType]
      delete this.listenner[actionType]
      for (let fn of funcs) {
        fn()
        // 注意这里正在执行saga任务，此时要先将执行数组清空，
        // 不然会造成while循环一直往数组加函数，造成这里一直执行不完的问题。
      }
    }
  }

}