import React from 'react'

export default function  withLog(Comp,str) {
    return class withLog extends React.Component{
        componentDidMount(){
            console.log(`日志${Comp.name}被创建。。。`);
        }

        componentWillUnmount(){
            console.log(`日志${Comp.name}被销毁。。。`);
        }

        render(){
            return (
                <>
                    <h1>{str}</h1>
                    <Comp {...this.props}/>
                </>
    
            )
        }
    }
}
