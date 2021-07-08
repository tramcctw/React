import React from 'react'


export const ctx = React.createContext()

export default function (props) {
  return <ctx.Provider value={props.store} >
    {props.children}
  </ctx.Provider>
}