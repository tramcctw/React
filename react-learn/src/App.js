import React, { Component } from 'react';
import MoveDiv from './components/MoveDiv'
import MoveCounter from './components/MoveCounter'
import withListener from './components/withListener'

const WithMove = withListener(MoveDiv)
const WithCounter = withListener(MoveCounter)

class App extends Component {
    render() {
        return (
            <>
                <WithMove/>
                <WithCounter/>   
            </>
        );
    }
}

export default App;