import React from 'react';

export default function Plane (props) {
    const masonry_item = props.source.masonry_item;
    const col = props.col || 3;

    const style = {
        width:  masonry_item.column_width * col,
        height: 'auto',
        borderRadius: 8,
        marginBottom: 22,
        fontSize: 14,
    };

    return (
        <div className={masonry_item.item_name}
             style={style}>
          {props.children}
        </div>
    );
}
