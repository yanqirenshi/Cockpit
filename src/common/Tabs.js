import React from 'react';
import { useLocation } from "react-router-dom";
import 'bulma/css/bulma.css';

export default function Tabs (props) {
    const data = props.data;

    const location = useLocation();

    const tab_code = new URLSearchParams(location.search).get('tab');

    const tab = data.find(tab=>tab.code===tab_code) || data[0];

    return (
        <div className="tabs is-centered">
          <ul>
            {data.map(d=>(
                <li key={d.code}
                    className={d.code===tab_code ? "is-active" : ""}>
                  <a href={location.pathname+`?tab=${d.code}`}>
                    {d.label}
                  </a>
                </li>
            ))}
          </ul>
        </div>
    );
}
