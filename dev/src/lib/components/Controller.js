import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilter, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";

const style = {
    container: {
        borderBottom: '1px solid #eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    item: {
        marginRight: 11,
        box: {
            marginRight:3,
        },
    },
    icon: {
        fontSize: 14,
        marginTop: -2,
        marginRight: 11,
        marginLeft: 7,
        color: '#888'
    }
};

export default function Controller (props) {
    const loading = props.loading;
    const filter = props.filter;
    const callbacks = props.callbacks;
    const additional = props.additional;

    const callbacks_filter = callbacks.filter;

    const change = (e) => {
        const code = e.target.getAttribute('code');
        const filter_item = filter.find(d=>d.code===code);
        callbacks_filter.change(filter_item);
    };

    const refresh = () => callbacks.refresh();
    const clearAll = () => callbacks_filter.clearAll();
    const checkAll = () => callbacks_filter.checkAll();

    return (
        <div style={style}>

          <div style={style.container}>
            <div style={style.icon}>
              <button className="button is-small"
                      onClick={refresh}
                      disabled={loading}>
                <FontAwesomeIcon style={{}} icon={faSyncAlt} />
              </button>
            </div>

            {/* <div style={style.icon}> */}
            {/*   <FontAwesomeIcon style={{}} icon={faFilter} /> */}
            {/* </div> */}

            {filter.filter(d=>d.code).map((d,i) => {
                return (
                    <label key={d.code} className="checkbox" style={style.item}>
                      <input type="checkbox"
                             style={style.item.box}
                             checked={d.selected}
                             code={d.code}
                             onChange={change} />
                      {d.code}
                    </label>
                );
            })}

            <div style={style.icon}>
              <button className="button is-small" onClick={checkAll}>
                All
                <FontAwesomeIcon style={{marginLeft:3}} icon={faCheckSquare} />
              </button>
              <button className="button is-small" onClick={clearAll}>
                All
                <FontAwesomeIcon style={{marginLeft:3}} icon={faSquare} />
              </button>
            </div>

            {additional}
          </div>
        </div>
    );
}
