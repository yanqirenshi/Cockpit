import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";

import 'bulma/css/bulma.css';

import Tabs from './common/Tabs.js';

import Overview from './tabs/Overview.js';
import Example from './tabs/Example.js';
import Dictionary from './tabs/Dictionary.js';
import MarineLife from './tabs/MarineLife.js';
import Lures from './tabs/Lures.js';
import Enoshima from './tabs/Enoshima.js';

const tabs = [
    { code: 'overview',    label: 'Overview' },
    { code: 'enoshima',    label: '江ノ島' },
    { code: 'marine-life', label: '海洋生物' },
    { code: 'lures',       label: '疑似餌' },
    { code: 'dictionary',  label: '辞書' },
    { code: 'examples',    label: 'Examples' },
];

function App() {
    const tab_code = new URLSearchParams(useLocation().search).get('tab');

    return (
        <div>

          <div style={{height: 41}}>
            <Tabs data={tabs}/>
          </div>

          <div style={{height: 'calc(100vh - 42px)'}}>
            {tab_code==='overview'    && <Overview/>}
            {tab_code==='enoshima'    && <Enoshima/>}
            {tab_code==='marine-life' && <MarineLife/>}
            {tab_code==='lures'       && <Lures/>}
            {tab_code==='examples'    && <Example/>}
            {tab_code==='dictionary'  && <Dictionary/>}
          </div>

        </div>
    );
}

export default App;
