import React from 'react';

import Card from './Card.js';

export default class CardMessage extends Card {
    // constructor () {
    //     super();
    // }
    seed () {
        return {
            id: -1,
            card: 'MESSAGE',
            type: 'NORMAL',
            title: null, // string
            msg: null, // string
        };
    }
    makeMessageContents (v) {
        if (Array.isArray(v))
            return v.map((d,i) => <p key={i}>{d}</p>);

        if ('string'===(typeof v))
            return this.makeMessageContents(v.split('\n'));

        return v;
    }
    make (id, data)  {
        return {
            id: id,
            _class: 'MESSAGE',
            _type: 'message',
            _core: data,
            size: { col: 2, row: 2 },
            message: {
                type: data.type==='e' ? 'ERROR' : 'NORMAL',
                title: data.title,
                contents: this.makeMessageContents(data.msg),
                core: data,
            },
            updated_at: null,
        };
    }
}
