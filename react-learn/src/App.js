import React, { Component } from 'react';

class Comp1 extends React.Component{
    render(){
        return(
            <h1>Comp1</h1>
        )
    }
}




class App extends Component {
    render() {
        return (
            <div>
                <Comp1/>
            </div>
        );
    }
}

export default App;