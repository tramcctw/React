import React from 'react'
import Input from './FormInput'
import Button from './FormButton'
import ctx from './contextForm'

export default class Index extends React.Component {
    
    state = {
        formData:{},
    }

    render() {
        return (
            <ctx.Provider value={this.state}>
                {this.props.children}
            </ctx.Provider>
        )
    }
}

Index.input = Input
Index.button = Button
