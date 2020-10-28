import React, { Component } from 'react';
import './MoveDiv.css'

class MoveCounter extends Component {
    render() {
        return (
            <h1>
                <span>x:{parseInt(this.props.x)} </span>
                <span>y:{parseInt(this.props.y)}</span>
            </h1>
        );
    }
}

export default MoveCounter;