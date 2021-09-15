import React, { Component } from 'react';
import ctx from './ContextRouter';
import matchPath from './matchPath';
import Route from './Route';

export default class Switch extends Component {

    getRenderChildren = (value) => {
        let children = [];

        if(Array.isArray(this.props.children)){
            children = this.props.children;
        }else {
            children = [this.props.children];
        }

        for(let route of children){
            if(route.type !== Route){
                throw Error('child must Route!!')
            }
            const match =  matchPath(route.props.path || '/', value.location.pathname, {
                sensitive: route.props.sensitive || false,
                strict: route.props.strict || false,
                exact: route.props.exact || false
            })
            if(match){
                const Component = route.props.component;
                return <Component {...value} match={match}/>
            }
        }
        return null;
    }

    render() {
        return (
            <ctx.Consumer>
                {this.getRenderChildren}
            </ctx.Consumer>
        )
    }
}
