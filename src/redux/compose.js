
export function compose(...args) {

  if (args.length === 0) {
    return params => params
    // 返回原始的dispatch
  }

  if (args.length === 1) {
    return args[0]
  }

  // 注意params是用来接收原始的dispatch的
  return args.reduce((a, b) => (params) => a(b(params)))

}