import moment from 'moment';

export default class Card {
    constructor () {
        this._type = null;
        this._id = null;
        this._core = null;
        this._order = null;
    }
    id () {
        return this._id;
    }
    type () {
        return this._type;
    }
    core () {
        return this._core;
    }
    order () {
        return this._order;
    }
    /***** **************************************************************** *****/
    /*****   make                                                           *****/
    /***** **************************************************************** *****/
    updatedAtByData (d) {
        if (d.updated_at===null)
            return null;

        if (d.updated_at)
            return d.updated_at;

        return moment();
    }

}
