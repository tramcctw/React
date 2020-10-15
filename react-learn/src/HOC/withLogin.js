import React from 'react'

export default function withLogin(Comp){
    return class withLogin extends React.Component{
        render() {
            if(this.props.login === true){
                return (
                    <Comp {...this.props}/>
                )
            }else{
                return null
            }
        
        }
    }
}