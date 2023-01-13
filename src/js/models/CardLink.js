import Card from './Card.js';
import moment from 'moment';

export default class CardLink extends Card {
    // constructor () {
    //     super();
    // }
    seed () {
        return {
            id: -1,
            card: 'LINK',
            type: null, // string
            label: null, // string or array
            wallpaper: null, // string
            href: null, // string
        };
    }
    make (id, data)  {
        return {
            id: id,
            _class: 'LINK',
            _type: data.type || 'Others',
            _core: data,
            size: {
                col: data.col || 1,
                row: data.row || 1
            },
            label: { contents: data.label },
            href: data.href,
            wallpaper: { path: data.wallpaper },
            updated_at: moment(),
        };
    }
}
