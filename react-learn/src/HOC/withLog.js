import React from 'react'

export default function  withLog(Comp) {

    class WithLogWrapper extends React.Component{
        componentDidMount(){
            console.log(`日志${Comp.name}被创建。。。`);
        }

        componentWillUnmount(){
            console.log(`日志${Comp.name}被销毁。。。`);
        }


        render(){

            const {abc,...rest} = this.props
            return (
                <>
                    <Comp ref={abc}  {...rest}/>
                </>
    
            )
        }
    }

    return React.forwardRef((props,ref)=>{
        return <WithLogWrapper {...props} abc={ref}/>
    })
}
