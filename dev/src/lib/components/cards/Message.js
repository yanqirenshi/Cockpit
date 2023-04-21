import React from 'react';

/** ****************************************************************
 *   props = {
 *     data: {
 *       message: {
 *         title: string,
 *         contents: string,
 *       },
 *     },
 *     masonry_item: {
 *       column_width: number,
 *       item_name:    string,
 *     },
 *   }
 * **************************************************************** */
export default function Message (props) {
    const data = props.source.data;
    const masonry_item = props.source.masonry_item;

    const col = data.size.col || 1;

    const style = {
        width:  masonry_item.column_width * col + ((col-1) * masonry_item.gutter),
        height: 'auto', // masonry_item.column_width * row,
        borderRadius: 8,
        marginBottom: 22,
        fontSize: 14,
        head: {
            padding: '11px 22px',
        },
        body: {
            padding: 11,
            wordBreak: 'break-word',
        },
    };

    return (
        <div className={masonry_item.item_name}
             style={style}>

          <article className="message is-danger">

            <div className="message-header" style={style.head}>
              <p>{data.message.title}</p>
            </div>

            <div className="message-body" style={style.body}>
              {data.message.contents}
            </div>

          </article>

        </div>
    );
}
