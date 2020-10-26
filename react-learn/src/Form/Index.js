import React from 'react'
import Input from './FormInput'
import Button from './FormButton'
import ctx from './contextForm'
import PorpTypes from 'prop-types'

export default class Index extends React.Component {
    
    state = {
        formData:{},
        change:(name,val)=>{
            this.setState({
                formData:{
                    ...this.state.formData,
                    [name]:val
                }
            })
        },
        submit:(datas)=>{
            this.props.onSubmit && this.props.onSubmit(datas)
        }
    }

    static propTypes = {
        onSubmit:PorpTypes.func
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
