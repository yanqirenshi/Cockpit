import React from 'react';

import 'bulma/css/bulma.css';

import Cockpit, {Core} from './lib/index.js';

const core = new Core({
    item_name: 'card-item',
    column_width: 100,
    gutter: 10,
});

function App() {
    const filter = [];

    const callback = {
        refresh: ()=> {},
        filter: {
            clearAll: ()=> {},
            checkAll: ()=> {},
        },
    };

  return (
    <div>
      <Cockpit core={core}
               loading={false}
               filter={filter}
               callbacks={callback}/>
    </div>
  );
}

export default App;
