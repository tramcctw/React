import React from 'react'
import ctx from './contextForm'

export default function FormButton(props) {
    return (
        <ctx.Consumer>
            {
                ctx=>(
                    <button onClick={()=>{ctx.submit(ctx.formData)}}>
                        {props.children}
                    </button>
                )
            }
        </ctx.Consumer>
     
    )
}
