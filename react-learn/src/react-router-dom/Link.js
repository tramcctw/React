import React from 'react'
import ctx from '../react-router/ContextRouter';
import { parsePath } from 'history';

export default function Link(props) {

    const {to, ...rest} = props;
    return (
      <ctx.Consumer>
          {value => {
              let loc;
              if(typeof to === 'string'){
                loc = parsePath(to);
              }else {
                  loc = to;
              }
              return <a onClick={e => {
                e.preventDefault();
                value.history.push(loc);
              }} {...rest}>{props.children}</a>
          }}
      </ctx.Consumer>
    )
}
