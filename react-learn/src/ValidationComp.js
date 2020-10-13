import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ValidationComp extends Component {

    static defaultProps = {
        b:true
    }

    static propTypes = {
        a:PropTypes.number.isRequired, // 必须是一个数字，且必填
        b:PropTypes.bool.isRequired, // 必须是一个布尔，且必填
        onclick:PropTypes.func,     //  必须是一个函数
        c:PropTypes.any,            // 1.可以设置必填，2.可以告知可以传递的属性
        
    }
    render() {
        return (
            <div>
                {this.props.a}
                {this.props.b}
            </div>
        )
    }
}
