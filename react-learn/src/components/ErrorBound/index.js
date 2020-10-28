import React, { Component } from 'react';

class ErrorBound extends Component {

    state = {
        hasError:false
    }

    // static getDerivedStateFromError(err){
    //     console.log(err)
    //     return {
    //         hasError:true
    //     }
    // }

    componentDidCatch(err,info){
        console.log(err)
        console.log(info)
        this.setState({
            hasError:true
        })
    }

    render() {
        return (
            <div>
                {this.state.hasError ? <h2>error</h2> : 
                this.props.children}
            </div>
        );
    }
}

export default ErrorBound;