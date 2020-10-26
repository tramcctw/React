import React, { Component } from 'react'
import Form from './Index'


console.log(Form.input);

export default class Test extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={datas=>{
                    console.log(datas);
                }}>
                   用户: <Form.input name="loginId"></Form.input>
                   密码：<Form.input name="password" type="password"></Form.input>
                        <Form.button>提交</Form.button>
                </Form>
            </div>
        )
    }
}
