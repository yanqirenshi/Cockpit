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
            background: 'rgba(238, 238, 238, 0.9)',
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

export default function Cockpit (props) {
    const core = props.core;

    const loading = props.loading;
    const filter = props.filter;
    const callbacks = props.callbacks;
    const veil_color = props.veil_color;
    const background = props.background;
    const additional = props.additional;
    const children = props.children || [];

    const style_veil = {...style.pool.veil};
    const style_forground = {...style.pool.forground};

    if (children.length===0) {
        style_veil.display = 'none';
        style_forground.display = 'none';
    }

    if (veil_color)
        style_veil.background = veil_color;

    return (
        <div style={style}>
          <div>
            <Controller loading={loading}
                        filter={filter}
                        callbacks={callbacks}
                        additional={additional}/>
          </div>

          <div style={style.pool}>
            {background &&
             <div style={style.pool.background}>
               {background}
             </div>}

            <div style={style_veil}></div>

            <div style={style_forground}>
              <Cards core={core}>
                {children}
              </Cards>
            </div>
          </div>
        </div>
    );
}
