import React from 'react';

import {LinkBlank} from '../../../components/Commons.js';

const style = {
    forground: {
        position: 'absolute',
        background: 'rgba(255,255,255,0.8)',
        width: '100%',
        height: '100%',
        padding: 22,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        fontWeight: 'bold',
        textShadow: '0px 0px 10px #fff',
    }
};

function makeContents (v) {
    if (Array.isArray(v))
        return v.map((d,i) => <p key={i}>{d}</p>);

    if ('string'===(typeof v))
        return makeContents(v.split('\n'));

    return v;
}

/** **************************************************************** *
 *   props = {
 *     data: {
 *       size: {
 *         col: number,
 *         row: number,
 *       },
 *       wallpaper: {
 *         path: string,
 *       },
 *       href: string,
 *       label: {
 *         contents: string,
 *       }
 *     },
 *     masonry_item: {
 *       column_width: number,
 *       item_name:    string,
 *     },
 *   }
 * **************************************************************** */
export default function Link (props) {
    const data = props.source.data;
    const masonry_item = props.source.masonry_item;
    const callbacks = props.source.callbacks;

    const col = data.size.col || 1;
    const row = data.size.row || 1;

    const style_root = {
        width:  masonry_item.column_width * col,
        height: masonry_item.column_width * row,
        borderRadius: 8,
        marginBottom: 22,
    };

    const style_background = {
        position: 'absolute',
        background: 'rgba(255,255,255,0.8)',
        width: '100%',
        height: '100%',
        padding: 22,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${data.wallpaper.path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };


    const moveLast = () => callbacks.moveLast(data);
    const click = (e) => e.ctrlKey && moveLast();
    const dblclick = (e) => moveLast();

    return (
        <div className={masonry_item.item_name}
             style={style_root}>

          <div style={style_background}/>

          <div style={style.forground}
               onClick={click}
               onDoubleClick={dblclick}>
            <LinkBlank href={data.href} style={style.link}>
              {makeContents(data.label.contents)}
            </LinkBlank>
          </div>

        </div>
    );
}
