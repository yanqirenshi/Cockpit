import Card from './Card.js';

export default class CardSL extends Card {
    constructor () {
        super();

        this._open = null;
        this._small = null;
        this._large = null;
    }
    seed () {
        return {
            card: 'SL',
            type: null, // string
            s: {
                title: null, // string
                body: null, // string
                col: 3
            },
            l: {
                title: null, // string
                body: null, // string
                col: 5
            },
            updated_at: null,
        };
    }
    make (id, data)  {
        return {
            _class: 'SL',
            _type: data.type || 'Others',
            id: id,
            _core: data,
            open: false,
            small: {
                head: {
                    title: { contents: data.s.title },
                },
                body: { contents : data.s.body },
                size: { col: data.s.col },
            },
            large: {
                head: {
                    title: { contents: data.l.title },
                },
                body: { contents : data.l.body },
                size: { col: data.l.col },
            },
            updated_at: data.updated_at,
        };

    }
}
