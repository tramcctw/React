import React,{PureComponent} from 'react';

function withListener(Comp) {
    return class WithListenerWrapper extends PureComponent{
        state = {
            x:0,
            y:0
        }
    
        refDiv = React.createRef()
    
        moveHandle = e=>{
            let left = this.refDiv.current.getBoundingClientRect().left
            let top = this.refDiv.current.getBoundingClientRect().top
            let x = e.clientX - left
            let y = e.clientY - top
            this.setState({
                x,y
            })
        }
        
        render(){
            return(<div ref={this.refDiv} className="wrapper" onMouseMove={this.moveHandle}>
                    <Comp {...this.state}/>
                </div>)
        }
    }
}

export default withListener;