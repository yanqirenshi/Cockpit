import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";

import 'bulma/css/bulma.css';

import Tabs from './common/Tabs.js';

import Overview from './tabs/Overview.js';
import Data from './tabs/Data.js';
import Example from './tabs/Example.js';

const tabs = [
    { code: 'overview', label: 'Overview' },
    { code: 'data',     label: 'Data' },
    { code: 'examples', label: 'Examples' },
];

function App() {
    const tab_code = new URLSearchParams(useLocation().search).get('tab');

    return (
        <div>
          <Tabs data={tabs}/>

          {tab_code==='overview'
           && <Overview/>}

          {tab_code==='data'
           && <Data/>}

          {tab_code==='examples'
           && <Example/>}

        </div>
    );
}

export default App;
