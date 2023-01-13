import Card from './Card.js';

export default class CardPlane extends Card {
    // constructor () {
    //     super();
    // }
    seed () {
        return {
            id: -1,
            card: 'PLANE',
            type: null, // string
            col: 3,
        };
    }
    make (id, data)  {
        return {
            id: id,
            _class: 'PLANE',
            _type: data.type || 'other',
            _core: data,
            size: { col: data.col || 3 },
            updated_at: null,
        };
    }
}
