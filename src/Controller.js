import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const style = {
    container: {
        borderBottom: '1px solid #eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    item: {
        marginRight: 22,
        box: {
            marginRight:6,
        },
    },
    icon: {
        fontSize: 14,
        marginTop: -2,
        marginRight: 22,
        marginLeft: 7,
        color: '#888'
    }
};

export default function Controller (props) {
    const loading = props.loading;
    const callbacks_filter = props.callbacks.filter;

    const change = (e) => {
        const code = e.target.getAttribute('code');
        const filter_item = props.filter.find(d=>d.code===code);
        callbacks_filter.change(filter_item);
    };

    const refresh = () => props.callbacks.refresh();
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

            <div style={style.icon}>
              <FontAwesomeIcon style={{}} icon={faFilter} />
            </div>

            {props.filter.filter(d=>d.code).map((d,i) => {
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
              <button className="button is-small" onClick={clearAll}>
                Clear All
              </button>
              <button className="button is-small" onClick={checkAll}>
                Check All
              </button>
            </div>
          </div>
        </div>
    );
}
