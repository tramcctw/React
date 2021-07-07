import React, { useContext, useEffect, useState } from 'react'
import { bindActionCreators } from '../redux/bindActionCreators'
import { ctx } from './Provider'

function isObjEqual(o1, o2) {
  for (let key in o2) {
    if (o2.hasOwnProperty(key)) {
      if (o1[key] !== o2[key]) {
        return false
      }
    }
  }
  return true
}

export default function (mapStateToProps, mapDispatchToProps) {

  return function (Comp) {

    return (props) => {
      const store = useContext(ctx)
      let hanleAction = null
      const [state, setState] = useState(mapStateToProps && mapStateToProps(store.getState()))

      useEffect(() => {
        return store.subScribe((prevState, currState) => {
          if (!isObjEqual(prevState, currState)) {
            setState(mapStateToProps && mapStateToProps(store.getState()))
          }
        })
      }, [store])

      if (mapDispatchToProps) {
        if (typeof mapDispatchToProps === 'function') {
          hanleAction = mapDispatchToProps(store.dispatch)
        } else if (typeof mapDispatchToProps === 'object') {
          hanleAction = bindActionCreators(mapDispatchToProps)
        }
      }
      return <Comp {...props} {...state} {...hanleAction} />
    }
  }
}