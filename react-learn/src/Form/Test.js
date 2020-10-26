import React, { Component } from 'react'
import Form from './Index'

export default class Test extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={datas=>{
                    console.log(datas);
                }}>
                    <Form.input></Form.input>
                    <Form.input></Form.input>
                </Form>
            </div>
        )
    }
}
