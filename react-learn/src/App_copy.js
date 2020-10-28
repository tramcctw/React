import React, { Component } from 'react';
// import MoveDiv from './components/MoveDiv'
// import MoveCounter from './components/MoveCounter'
import MoveListener from './components/MoveListener'







class App extends Component {

    moveDiv = val=>(<div style={{
        width:100,
        height:100,
        background:"#f40",
        position:"absolute",
        left:val.x - 50,
        top:val.y - 50
    }}></div>)

    moveCounter = val=>(
        <h1>
            <span>x:{parseInt(val.x)} </span>
            <span>y:{parseInt(val.y)}</span>
        </h1>
    )


    render() {
        return (
            <>
                {/* <MoveDiv/>
                <MoveCounter/> */}
                {/* <MoveListener>
                    {val=> this.moveDiv(val)}
                </MoveListener>

                <MoveListener>
                    {val=> this.moveCounter(val)}
                </MoveListener> */}

                <MoveListener render={val=> this.moveDiv(val)}/>
                <MoveListener render={val=> this.moveCounter(val)}/>
            </>
        );
    }
}

export default App;