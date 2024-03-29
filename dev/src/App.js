import React, { useState } from 'react';
import 'bulma/css/bulma.css';

import Cockpit, {Core, Plane, Message, Link, SmallLarge} from './lib/index.js';

const core = new Core({
    item_name: 'card-item',
    column_width: 100,
    gutter: 10,
});

function makeSeeds () {
    let id = 1;

    const out = [];

    for (let i=0 ; i<50 ; i++ ) {
        const seed_plane = core.models.plane.seed();

        seed_plane.id = id++;
        seed_plane.type = 'test';
        seed_plane.col = 'test';
        out.push(seed_plane);

        const seed_message = core.models.message.seed();
        seed_message.id = id++;
        seed_message.msg = 'test';
        seed_message.title = 'title';
        out.push(seed_message);

        const seed_link = core.models.link.seed();
        seed_link.id = id++;
        seed_link.type = 'test';
        seed_link.label = 'test';
        seed_link.wallpaper = 'https://cdn.icon-icons.com/icons2/2631/PNG/512/google_search_new_logo_icon_159150.png';
        seed_link.href = 'https://www.google.com';
        out.push(seed_link);

        const seed_sl = core.models.sl.seed();
        seed_sl.id = id++;
        seed_sl.type = 'test';
        seed_sl.s.title = 'yyy';
        seed_sl.s.body  = 'xxx';
        seed_sl.l.title = 'aaa';
        seed_sl.l.body  = 'bbb';
        out.push(seed_sl);
    }

    return out;
}

function makeCards (seeds, callbacks) {
    return seeds.map(s=> {
        const source = {
            data: s,
            masonry_item: core.options(),
            callbacks: callbacks,
        };

        switch (s._class) {
        case 'MESSAGE': return <Message    key={s.id} source={source} />;
        case 'PLANE':   return <Plane      key={s.id} source={source} />;
        case 'LINK':    return <Link       key={s.id} source={source} />;
        case 'SL':      return <SmallLarge key={s.id} source={source} />;
        }

        return null;
    });
}

function App() {
    const [cards] = useState(core.data2cards(makeSeeds()));

    const filter = [];

    const callbacks = {
        refresh: ()=> {},
        filter: {
            clearAll: ()=> {},
            checkAll: ()=> {},
        },
        moveLast: (data) => data,
        switch: (id) => core.switchSize(id, cards),
        sl: {
            switch: (id) => core.switchSize(id, cards),
        },
    };

    const background = <div style={{background:'#eee', height: '100%'}}></div>;

    const options = core.options();
    const w_unit = options.column_width + (options.gutter * 2);
    const cols = Math.floor(window.innerWidth / w_unit) - 2;
    const w = cols * w_unit;

    return (
        <div style={{height:'100%'}}>
          <Cockpit style={{pool:{ forground: { contents: { width: w, margin:'auto', marginLeft:'auto'} }}}}
                   core={core}
                   loading={false}
                   filter={filter}
                   veil_color="rgba(231, 231, 235, 0.9)"
                   background={background}
                   callbacks={callbacks}
                   additional={<div><p>YYY</p></div>}>
            {makeCards(cards, callbacks)}
          </Cockpit>
        </div>
    );
}

export default App;
