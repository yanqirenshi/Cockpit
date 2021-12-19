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

    const seed_plane = core.models.plane.seed();

    seed_plane.id = id++;
    seed_plane.type = 'test';
    seed_plane.col = 'test';

    const seed_message = core.models.message.seed();
    seed_message.id = id++;
    seed_message.msg = 'test';
    seed_message.title = 'title';

    const seed_link = core.models.link.seed();
    seed_link.id = id++;
    seed_link.type = 'test';
    seed_link.label = 'test';
    seed_link.wallpaper = 'https://cdn.icon-icons.com/icons2/2631/PNG/512/google_search_new_logo_icon_159150.png';
    seed_link.href = 'https://www.google.com';

    const seed_sl = core.models.sl.seed();
    seed_sl.id = id++;
    seed_sl.type = 'test';
    seed_sl.s.title = 'yyy';
    seed_sl.s.body  = 'xxx';
    seed_sl.l.title = 'aaa';
    seed_sl.l.body  = 'bbb';

    return [
        seed_plane,
        seed_message,
        seed_link,
        seed_sl,
    ];
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

    return (
        <div style={{height:'100%'}}>
          <Cockpit core={core}
                   loading={false}
                   filter={filter}
                   background={background}
                   callbacks={callbacks}>
            {makeCards(cards, callbacks)}
          </Cockpit>
        </div>
    );
}

export default App;
