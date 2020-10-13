import React from 'react'

export default function FuncDefault(props) {
    
    return(
    <div>a:{props.a},b:{props.b}</div>
    )
}

FuncDefault.defaultProps = {
    a:1,
    b:2
}