import React from 'react';

import Cards from './Cards.js';
import Controller from './Controller.js';

const style = {
    width: '100%',
    height: '100%',
    pool: {
        height: 'calc(100% - 45px)',
        width: '100%',
        position: 'relative',
        background: {
            width: '100%',
            height: '100%',
            position: 'absolute',
        },
        veil: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            background: 'rgba(255,255,255,0.8)',
        },
        forground: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            padding: 22,
            paddingLeft: 77,
            paddingRight: 77,
            paddingBottom: 222,
            overflow: 'auto',
        },
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

    const children = props.children || [];

    return (
        <div style={style}>
          <div>
            <Controller loading={loading}
                        filter={filter}
                        callbacks={callbacks}/>
          </div>

          <div style={style.pool}>
            {props.background &&
             <div style={style.pool.background}>
               {props.background}
             </div>}

            {children.length!==0 &&
             <div style={style.pool.veil}>
             </div>}

            <div style={style.pool.forground}>
              <Cards core={core}>
                {children}
              </Cards>
            </div>
          </div>
        </div>
    );
}
