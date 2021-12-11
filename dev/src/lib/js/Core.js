import React from 'react';
import moment from 'moment';

import * as models from './models/index.js';

export default class Core {
    constructor (options) {
        this._options = null;
        this._filter = [];

        this._data = []; // TODO 廃棄予定
        this._cards = []; // TODO 廃棄予定

        this._card_id_counter = -1;
        this._cards2 = {};

        this.options(options);

        this.models = {
            link:    new models.CardLink(),
            message: new models.CardMessage(),
            plane:   new models.CardPlane(),
            sl:      new models.CardSL(),
        };
    }
    cards (v) {
        console.warn('Not suppoted yet. method=Core.cards');

        if (arguments.length===1) {
            this._cards = v;
            this.filter(this.makeFilter(this._cards));
        }

        return this._cards;
    }
    getCard (id) {
        for (const k in this._cards2) {
            const x = this._cards2[k].ht[id];

            if (x)
                return x;
        }

        return null;
    }
    filter (v) {
        if (arguments.length===1)
            this._filter = v;

        return this._filter;
    }
    options (v) {
        if (arguments.length===1)
            this._options = v;

        return this._options;

    }
    shuffle ([...array]) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    /***** **************************************************************** *****/
    /*****   Links                                                          *****/
    /***** **************************************************************** *****/
    cardLInks () {
        let i = -1;
        return this._data.links.reduce((list, d) => {
            d.id = i--;
            list.push(d);
            return list;
        }, []);
    }
    makeCardLink (d) {
        const id = this._card_id_counter--;
        return new models.CardLink().make(id, d);
    }
    makeCardLinks () {
        return this.cardLInks().map(d => this.makeCardLink(d));
    }
    /***** **************************************************************** *****/
    /*****   Small and Large                                                *****/
    /***** **************************************************************** *****/
    makeCardSL (d) {
        const id = this._card_id_counter--;
        return new models.CardSL().make(id, d);
    }
    makeCardsSL () {
        const list = this._data.sl;

        return list.map(d=>this.makeCardSL(d));
    };
    switchSize (id, cards) {
        const card = cards.find(d=>d.id===id);
        card.open = !card.open;
    }
    /***** **************************************************************** *****/
    /*****   message                                                        *****/
    /***** **************************************************************** *****/
    makeMessage (g) {
        const id = this._card_id_counter--;
        return new models.CardMessage().make(id, g);
    }
    makeMessages (g) {
        return this._data.messages.map(d => this.makeMessage(d));
    }
    /***** **************************************************************** *****/
    /*****   Projects                                                       *****/
    /***** **************************************************************** *****/
    setProjectCards (projects) {
        if (projects.length===0) return;
    }
    /***** **************************************************************** *****/
    /*****   Issues and Projects                                            *****/
    /***** **************************************************************** *****/
    getUpdatedAt (d, today) {
        const date = d.core.nextActionDate();

        // Next Action Date が設定されてない場合は now とする。
        if (!date)
            return null;

        const duedate = moment(date);

        // Next Action Date の値が日付でない場合は now とする。
        if (!duedate.isValid())
            return moment();

        return duedate;
    }
    // getUpdatedAt (d, today) {
    //     const data_next = d.issue.date_next_action;
    //     if (!data_next)
    //         return moment();

    //     const duedate = moment(data_next);

    //     if (!duedate.isValid())
    //         return moment();

    //     if (duedate.isAfter(today))
    //         return moment();

    //     return null;
    // }
    makeIssueCard (d, today) {
        console.warn('Not suppoted yet. method=makeIssueCard');

        return {
            _class: 'SL',
            _type: '作業',
            _core: d,
            id: d.id,
            issue: d, // 廃棄予定
            core: d,  // 廃棄予定
            updated_at: this.getUpdatedAt(d, today),
            small: {
                head: {
                    title: { contents: '作業' },
                },
                body: { contents : 'ISSUE-S' },
                size: { col: 3 },
            },
            large: {
                head: {
                    title: { contents: '作業' },
                },
                body: { contents : 'ISSUE-L' },
                size: { col: 6 },
            },
        };
    }
    updateIssueCard (card, d, today)  {
        const card_next = card._core.issue.core.nextActionDate();
        const data_next = d.issue.core.nextActionDate();
        if (card_next!==data_next)
            card.updated_at = this.getUpdatedAt(d, today);

        // TODO: どれが正解?
        card.core = d;
        card.issue = d;
        card._core = d;
    };
    list2ht (list) {
        return list.reduce((ht, d) => {
            ht[d.id]=d;
            return ht;
        }, {});
    }
    setIssueCards (issues) {
        if (issues.length===0) return;

        const today = moment().startOf('date');

        const issues_ht = issues.reduce((ht, d) => {
            ht[d.id]=d;
            return ht;
        }, {});

        // 新の issues に存在しない card は ommit
        const cards_new = this.cards().reduce((pool, card) => {
            if (!(card._class==='SL' && card._type==='My Tasks')) {
                pool.list.push(card);
                pool.ht[card.id] = card;

                return pool;
            }

            const issue = issues_ht[card.id];

            if (!issue)
                return pool;

            if (card.core.due_date!==issue.due_date)
                card.updated_at = this.getUpdatedAt(issue, today);

            card.core = issue;

            pool.list.push(card);
            pool.ht[card.id] = card;

            return pool;
        }, {list:[], ht:{}});

        // cards に存在しない issue を追加する。
        const getDueDate = (issue) => {
            const v = issue.due_date;

            if (!v) return null;

            const m = moment(v);

            if (!m.isValid()) return null;

            return m;
        };

        const limit = moment(today).add(6, 'd');

        for (const issue of issues) {
            const due_date = getDueDate(issue);

            // due_date が設定されている場合、6日以上未来日のものは ommit する。
            if (due_date && due_date.isSameOrAfter(limit))
                continue;


            // cards に存在する場合
            const card = cards_new.ht[issue.id];
            if (card) {
                continue;
            }

            // cards に存在しない issue を追加する。
            cards_new.list.push(this.makeIssueCard(issue, today));
        }

        this.cards(cards_new.list);
    }
    /***** **************************************************************** *****/
    /*****   Plane                                                          *****/
    /***** **************************************************************** *****/
    makePlane (d) {
        const id = this._card_id_counter--;
        return new models.CardPlane().make(id, d);
    }
    /***** **************************************************************** *****/
    /*****   Make Cards                                                     *****/
    /***** **************************************************************** *****/
    makeCards (shuffle=true) {
        const out = []
              .concat(this.makeCardLinks())
              .concat(this.makeCardsSL())
              .concat(this.makeMessages());

        if (!shuffle) return out;

        return this.shuffle(out);
    }
    /***** **************************************************************** *****/
    /*****   Sort                                                           *****/
    /***** **************************************************************** *****/
    sort (list) {
        const not_updated = [];
        const updated = [];

        for (const d of list) {
            if (d.updated_at)
                updated.push(d);
            else
                not_updated.push(d);
        }

        const sorter = (a,b) => {
            if (a.updated_at.isSame(b.updated_at))
                return a.id < b.id ? -1 : 1;

            return a.updated_at.isSameOrBefore(b.updated_at) ? -1 : 1;
        };

        return []
            .concat(not_updated.sort((a,b)=> a.id < b.id ? -1 : 1))
            .concat(updated.sort(sorter));
    }
    /***** **************************************************************** *****/
    /*****   Data                                                           *****/
    /***** **************************************************************** *****/
    data2card (data, today) {

        const card_type = data.card;

        switch (card_type) {
        case 'LINK':     return this.makeCardLink(data);
        case 'SL':       return this.makeCardSL(data);
        case 'MESSAGE':  return this.makeMessage(data);
        case 'PLANE':    return this.makePlane(data);
        case 'ISSUE':    return this.makeIssueCard(data, today);
        default:         return null;
        }
    }
    data2cards (list, adapter) {
        const cards = this._cards2;
        const today = moment().startOf('date');

        const ensurePool = (ht,key) => ht[key] || (ht[key] = {list:[], ht:{}, index_core: {}});

        const data_ht = {};
        for (const data of list) {
            data_ht[data.id] = data;

            const card_type = data.card;

            if (!card_type) {
                console.warn('[Bad Data] Card is empty. Skip a data. data=' + data);
                continue;
            }

            const pool = ensurePool(cards, card_type);

            // データのカードを取得する。
            let card = pool.index_core[data.id];

            if (card) {
                // 存在している場合は更新
                if (card._class==='SL' && card._type==="作業")
                    this.updateIssueCard(card, data, today);
            } else {
                // 存在していない場合は追加
                card = this.data2card(data, today);

                if (!card) {
                    console.warn('[Bad Data] Unsupported. Skip a data. data=' + data);
                    continue;
                }

                pool.ht[card.id] = card;
                pool.index_core[card._core.id] = card;
                pool.list.push(card);
            }

            if (adapter)
                adapter(card);
        }

        const card_list = Object.keys(cards).reduce((l,k) => {
            const pool = cards[k];

            const ommitCard = (c) => {
                const core_id = c._core.id;

                if ("number"===typeof core_id)
                    return true;

                return data_ht[core_id] ? true : false;
            };

            return l.concat(pool.list.filter(ommitCard));
        }, []);

        this.filter(this.makeFilter(card_list));

        return card_list;
    }
    /***** **************************************************************** *****/
    /*****   Move last                                                      *****/
    /***** **************************************************************** *****/
    moveLast (data) {
        const card = this.getCard(data.id);

        if (!card) return;

        card.updated_at = moment();
    }
    /***** **************************************************************** *****/
    /*****   Filter                                                         *****/
    /***** **************************************************************** *****/
    makeFilter (cards) {
        const old_filter = this.filter();

        const new_filter = cards.reduce((list, card) => {
            let trg = list.find(d=>d.code===card._type);

            if (!trg) {
                trg = { code: card._type, count: 0, selected: true };
                list.push(trg);
            }
            trg.count++;

            return list;
        }, []);

        return new_filter.reduce((list, d) => {
            const trg = old_filter.find(h=>h.code===d.code);

            if (trg)
                list.push(trg);
            else
                list.push(d);
            return list;
        }, []);
    }
    changeFilter (selected_item) {
        const filter = this.filter();

        this.filter(filter.map(old_item=> {
            const new_item = {...old_item};

            if (new_item.code===selected_item.code)
                new_item.selected = !new_item.selected;

            return new_item;
        }));
    }
    clearAllFilter () {
        const filter = this.filter();

        for (const item of filter)
            item.selected = false;
    }
    checkAllFilter () {
        const filter = this.filter();

        for (const item of filter)
            item.selected = true;
    }
    filtering (cards) {
        const filter = this.filter();

        if (filter.length===0)
            return cards;

        const filter_ht = filter.reduce((ht,d) => {
            ht[d.code] = d.selected;

            return ht;
        }, {});

        return cards.filter(d => {
            if (!filter_ht[d._type])
                return false;

            return true;
        });
    }
    /***** **************************************************************** *****/
    /*****   masonry                                                        *****/
    /***** **************************************************************** *****/
    makeMasonryOptions () {
        return {
            itemSelector: '.' + this._options.item_name,
            columnWidth:  this._options.column_width,
            gutter:       this._options.gutter,
        };
    }
    calPoolWidth (dimensions) {
        const options = this._options;
        const max_w = dimensions.width - options.column_width;

        const col_w = options.column_width + (options.gutter * 2);

        const max_col = Math.floor(max_w / col_w);

        return max_col * col_w;
    }
}
