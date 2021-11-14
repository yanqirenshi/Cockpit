import React from 'react';

import Cards from './Cards.js';
import Controller from './Controller.js';

const style = {
    root: {
        display:'flex',
        flexDirection: 'column',
        height: '100%',
    },
    updatedat: {display:'none'},
    pool: {
        flexGrow:1,
        overflow: 'auto',
        paddingTop:22,
        paddingBottom:222
    }
};

function merge (props, key, style) {
    const props_style = props.style;
    if (!props_style)
        return null;

    const target = props_style[key];
    if (!target)
        return null;

    return {...style, ...target};
}

export default function Cockpit (props) {
    const core = props.core;

    const loading = props.loading;
    const filter = props.filter;
    const callbacks = props.callbacks;

    return (
        <div style={style.root}>
          <div>
            <Controller loading={loading}
                        filter={filter}
                        callbacks={callbacks}/>
          </div>

          <div style={merge(props, "pool", style.pool)}>
            <Cards core={core}>
              {props.children}
            </Cards>
          </div>
        </div>
    );
}
