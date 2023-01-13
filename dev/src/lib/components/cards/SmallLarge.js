import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWindowMinimize, faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

const style = {
    head : {
        fontSize:14,
        padding: '8px 11px',
        display: 'flex',
    },
    haed_left: {
        flexGrow: 1,
    },
};

function title (data, card_data) {
    return card_data.head.title.contents;
}

export default function SmallLarge (props) {
    const data = props.source.data;
    const masonry_item = props.source.masonry_item;
    const callbacks = props.source.callbacks.sl;

    const open = data.open;
    const card_data = open ? data.large : data.small;
    const col = card_data.size.col || 1;

    const style_root = {
        width:  masonry_item.column_width * col + ((col-1) * masonry_item.gutter),
        height: 'auto',
        borderRadius: 8,
        marginBottom: 22,
    };

    const clickSwitch = () => callbacks.switch(data.id);

    const moveLast = () => callbacks.moveLast(data);
    const click = (e) => e.ctrlKey && moveLast();
    const dblclick = (e) => moveLast();

    return (
        <div className={masonry_item.item_name}
             style={style_root}>

          <nav className="panel"
               style={{ border: '1px solid #eee', boxShadow: 'none'}}>

            <div className="panel-heading"
                 style={{...style.head, ...(card_data.head.style||{})}}
                 onClick={click} onDoubleClick={dblclick}>
              <div style={style.haed_left} >
                {title(data, card_data)}
              </div>

              <div>
                {!open &&
                 <FontAwesomeIcon icon={faWindowMaximize} onClick={clickSwitch} />}
                {open &&
                 <FontAwesomeIcon icon={faWindowMinimize} onClick={clickSwitch} />}
              </div>
            </div>

            <div className="panel-block" style={{padding: 0}}>
              <div style={{width:'100%'}}>
                {props.children}
              </div>
            </div>

          </nav>
        </div>
    );
}
