import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from './contextForm'

export default class FormInput extends Component {
    static defaultProps = {
        type:'text'
    }

    static propTypes = {
        type:PropTypes.string,
        name:PropTypes.string.isRequired
    }

    render() {
        return (
            <ctx.Consumer>
                {
                    val=>(
                        <div>
                            <input value={val.formData[this.props.name] || ""}
                            onChange={e=>{
                                val.change(this.props.name,e.target.value)
                            }}
                            name={this.props.name} 
                            type={this.props.type}/>
                        </div>
                    )
                }
            </ctx.Consumer>
        )
    }
}
