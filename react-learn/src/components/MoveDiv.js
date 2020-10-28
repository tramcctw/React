import React, { PureComponent } from 'react';
import './MoveDiv.css'
class MoveDiv extends PureComponent {

    render() {
        return (
            <div style={{
                width:100,
                height:100,
                background:"#f40",
                position:"absolute",
                left:this.props.x - 50,
                top:this.props.y - 50
            }}></div>
        );
    }
}

export default MoveDiv;