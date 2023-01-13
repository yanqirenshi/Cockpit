"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var models = _interopRequireWildcard(require("./models/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Core = /*#__PURE__*/function () {
  function Core(options) {
    _classCallCheck(this, Core);

    this._options = null;
    this._filter = [];
    this._data = []; // TODO 廃棄予定

    this._cards = []; // TODO 廃棄予定

    this._card_id_counter = -1;
    this._cards2 = {};
    this.options(options);
    this.models = {
      link: new models.CardLink(),
      message: new models.CardMessage(),
      plane: new models.CardPlane(),
      sl: new models.CardSL()
    };
  }

  _createClass(Core, [{
    key: "cards",
    value: function cards(v) {
      console.warn('Not suppoted yet. method=Core.cards');

      if (arguments.length === 1) {
        this._cards = v;
        this.filter(this.makeFilter(this._cards));
      }

      return this._cards;
    }
  }, {
    key: "getCard",
    value: function getCard(id) {
      for (var k in this._cards2) {
        var x = this._cards2[k].ht[id];
        if (x) return x;
      }

      return null;
    }
  }, {
    key: "filter",
    value: function filter(v) {
      if (arguments.length === 1) this._filter = v;
      return this._filter;
    }
  }, {
    key: "options",
    value: function options(v) {
      if (arguments.length === 1) this._options = v;
      return this._options;
    }
  }, {
    key: "shuffle",
    value: function shuffle(_ref) {
      var _ref2 = _toArray(_ref),
          array = _ref2.slice(0);

      for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref3 = [array[j], array[i]];
        array[i] = _ref3[0];
        array[j] = _ref3[1];
      }

      return array;
    }
  }, {
    key: "cardLInks",
    value:
    /***** **************************************************************** *****/

    /*****   Links                                                          *****/

    /***** **************************************************************** *****/
    function cardLInks() {
      var i = -1;
      return this._data.links.reduce(function (list, d) {
        d.id = i--;
        list.push(d);
        return list;
      }, []);
    }
  }, {
    key: "makeCardLink",
    value: function makeCardLink(d) {
      var id = this._card_id_counter--;
      return new models.CardLink().make(id, d);
    }
  }, {
    key: "makeCardLinks",
    value: function makeCardLinks() {
      var _this = this;

      return this.cardLInks().map(function (d) {
        return _this.makeCardLink(d);
      });
    }
    /***** **************************************************************** *****/

    /*****   Small and Large                                                *****/

    /***** **************************************************************** *****/

  }, {
    key: "makeCardSL",
    value: function makeCardSL(d) {
      var id = this._card_id_counter--;
      return new models.CardSL().make(id, d);
    }
  }, {
    key: "makeCardsSL",
    value: function makeCardsSL() {
      var _this2 = this;

      var list = this._data.sl;
      return list.map(function (d) {
        return _this2.makeCardSL(d);
      });
    }
  }, {
    key: "switchSize",
    value: function switchSize(id, cards) {
      var card = cards.find(function (d) {
        return d.id === id;
      });
      card.open = !card.open;
    }
    /***** **************************************************************** *****/

    /*****   message                                                        *****/

    /***** **************************************************************** *****/

  }, {
    key: "makeMessage",
    value: function makeMessage(g) {
      var id = this._card_id_counter--;
      return new models.CardMessage().make(id, g);
    }
  }, {
    key: "makeMessages",
    value: function makeMessages(g) {
      var _this3 = this;

      return this._data.messages.map(function (d) {
        return _this3.makeMessage(d);
      });
    }
    /***** **************************************************************** *****/

    /*****   Projects                                                       *****/

    /***** **************************************************************** *****/

  }, {
    key: "setProjectCards",
    value: function setProjectCards(projects) {
      if (projects.length === 0) return;
    }
    /***** **************************************************************** *****/

    /*****   Issues and Projects                                            *****/

    /***** **************************************************************** *****/

  }, {
    key: "getUpdatedAt",
    value: function getUpdatedAt(card_data, today) {
      var issue = card_data._core.core;
      var date = issue.nextActionDate(); // Next Action Date が設定されてない場合は now とする。

      if (!date) return null;
      var duedate = (0, _moment["default"])(date); // Next Action Date の値が日付でない場合は now とする。

      if (!duedate.isValid()) return (0, _moment["default"])();
      return duedate;
    }
  }, {
    key: "makeIssueCard",
    value: function makeIssueCard(d, today) {
      console.warn('Not suppoted yet. method=makeIssueCard');
      return {
        _class: 'SL',
        _type: '作業',
        _core: d,
        id: d.id,
        updated_at: this.getUpdatedAt(d, today),
        small: {
          head: {
            title: {
              contents: '作業'
            }
          },
          body: {
            contents: 'ISSUE-S'
          },
          size: {
            col: 3
          }
        },
        large: {
          head: {
            title: {
              contents: '作業'
            }
          },
          body: {
            contents: 'ISSUE-L'
          },
          size: {
            col: 6
          }
        }
      };
    }
  }, {
    key: "updateIssueCard",
    value: function updateIssueCard(card, card_data, today) {
      var old_issue = card._core._core.core;
      var now_issue = card_data._core.core;
      var old_next = old_issue.nextActionDate();
      var new_next = now_issue.nextActionDate();
      if (old_next !== new_next) card.updated_at = this.getUpdatedAt(card_data, today);
      card._core = card_data;
    }
  }, {
    key: "list2ht",
    value: function list2ht(list) {
      return list.reduce(function (ht, d) {
        ht[d.id] = d;
        return ht;
      }, {});
    }
  }, {
    key: "setIssueCards",
    value: function setIssueCards(issues) {
      var _this4 = this;

      if (issues.length === 0) return;
      var today = (0, _moment["default"])().startOf('date');
      var issues_ht = issues.reduce(function (ht, d) {
        ht[d.id] = d;
        return ht;
      }, {}); // 新の issues に存在しない card は ommit

      var cards_new = this.cards().reduce(function (pool, card) {
        if (!(card._class === 'SL' && card._type === 'My Tasks')) {
          pool.list.push(card);
          pool.ht[card.id] = card;
          return pool;
        }

        var issue = issues_ht[card.id];
        if (!issue) return pool;
        if (card.core.due_date !== issue.due_date) card.updated_at = _this4.getUpdatedAt(issue, today);
        card.core = issue;
        pool.list.push(card);
        pool.ht[card.id] = card;
        return pool;
      }, {
        list: [],
        ht: {}
      }); // cards に存在しない issue を追加する。

      var getDueDate = function getDueDate(issue) {
        var v = issue.due_date;
        if (!v) return null;
        var m = (0, _moment["default"])(v);
        if (!m.isValid()) return null;
        return m;
      };

      var limit = (0, _moment["default"])(today).add(6, 'd');

      var _iterator = _createForOfIteratorHelper(issues),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var issue = _step.value;
          var due_date = getDueDate(issue); // due_date が設定されている場合、6日以上未来日のものは ommit する。

          if (due_date && due_date.isSameOrAfter(limit)) continue; // cards に存在する場合

          var card = cards_new.ht[issue.id];

          if (card) {
            continue;
          } // cards に存在しない issue を追加する。


          cards_new.list.push(this.makeIssueCard(issue, today));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.cards(cards_new.list);
    }
    /***** **************************************************************** *****/

    /*****   Plane                                                          *****/

    /***** **************************************************************** *****/

  }, {
    key: "makePlane",
    value: function makePlane(d) {
      var id = this._card_id_counter--;
      return new models.CardPlane().make(id, d);
    }
    /***** **************************************************************** *****/

    /*****   Make Cards                                                     *****/

    /***** **************************************************************** *****/

  }, {
    key: "makeCards",
    value: function makeCards() {
      var shuffle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var out = [].concat(this.makeCardLinks()).concat(this.makeCardsSL()).concat(this.makeMessages());
      if (!shuffle) return out;
      return this.shuffle(out);
    }
    /***** **************************************************************** *****/

    /*****   Sort                                                           *****/

    /***** **************************************************************** *****/

  }, {
    key: "sort",
    value: function sort(cards) {
      var not_updated = [];
      var updated = [];

      var _iterator2 = _createForOfIteratorHelper(cards),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var card = _step2.value;
          if (card.updated_at) updated.push(card);else not_updated.push(card);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var sorter = function sorter(a, b) {
        if (a.updated_at.isSame(b.updated_at)) return a.id < b.id ? -1 : 1;
        return a.updated_at.isSameOrBefore(b.updated_at) ? -1 : 1;
      };

      return [].concat(not_updated.sort(function (a, b) {
        return a.id < b.id ? -1 : 1;
      })).concat(updated.sort(sorter));
    }
    /***** **************************************************************** *****/

    /*****   Data                                                           *****/

    /***** **************************************************************** *****/

  }, {
    key: "data2card",
    value: function data2card(data, today) {
      var card_type = data.card;

      switch (card_type) {
        case 'LINK':
          return this.makeCardLink(data);

        case 'SL':
          return this.makeCardSL(data);

        case 'MESSAGE':
          return this.makeMessage(data);

        case 'PLANE':
          return this.makePlane(data);

        case 'ISSUE':
          return this.makeIssueCard(data, today);

        default:
          return null;
      }
    }
  }, {
    key: "data2cards",
    value: function data2cards(list, adapter) {
      console.warn('data2cards は廃止予定です。cardDataList2Cards を利用してください。');
      return this.cardDataList2Cards(list, adapter);
    }
  }, {
    key: "cardDataList2Cards",
    value: function cardDataList2Cards(card_data_list, adapter) {
      var cards = this._cards2;
      var today = (0, _moment["default"])().startOf('date');

      var ensurePool = function ensurePool(key, ht) {
        return ht[key] || (ht[key] = {
          list: [],
          ht: {},
          index_core: {}
        });
      };

      var data_ht = {};

      var _iterator3 = _createForOfIteratorHelper(card_data_list),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var card_data = _step3.value;
          var card_data_id = card_data.id;
          var card_type = card_data.card;
          data_ht[card_data_id] = card_data; // card_type が空の場合、そのデータは無視する。

          if (!card_type) {
            console.warn('[Bad Data] Card is empty. Skip a data. data=' + card_data);
            continue;
          } // プールを取得する。


          var pool = ensurePool(card_type, cards); // データのカードを取得する。

          var card = pool.index_core[card_data_id];

          if (card) {
            // 存在している場合は更新
            if (card._class === 'SL' && card._type === "作業") this.updateIssueCard(card, card_data, today);
          } else {
            // 存在していない場合は追加
            card = this.data2card(card_data, today);

            if (!card) {
              console.warn('[Bad Data] Unsupported. Skip a data. data=' + card_data);
              continue;
            }

            pool.ht[card.id] = card;
            pool.index_core[card._core.id] = card;
            pool.list.push(card);
          }

          if (adapter) adapter(card);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var card_list = Object.keys(cards).reduce(function (l, k) {
        var pool = cards[k];

        var ommitCard = function ommitCard(c) {
          var core_id = c._core.id;
          if ("number" === typeof core_id) return true;
          return data_ht[core_id] ? true : false;
        };

        return l.concat(pool.list.filter(ommitCard));
      }, []); // filter を作成する。

      this.filter(this.makeFilter(card_list));
      return card_list;
    }
    /***** **************************************************************** *****/

    /*****   Move last                                                      *****/

    /***** **************************************************************** *****/

  }, {
    key: "moveLast",
    value: function moveLast(card_id) {
      var card = this.getCard(card_id);
      if (!card) return;
      card.updated_at = (0, _moment["default"])();
    }
    /***** **************************************************************** *****/

    /*****   Filter                                                         *****/

    /***** **************************************************************** *****/

  }, {
    key: "makeFilter",
    value: function makeFilter(cards) {
      var old_filter = this.filter();
      var new_filter = cards.reduce(function (list, card) {
        var trg = list.find(function (d) {
          return d.code === card._type;
        });

        if (!trg) {
          trg = {
            code: card._type,
            count: 0,
            selected: true
          };
          list.push(trg);
        }

        trg.count++;
        return list;
      }, []);
      return new_filter.reduce(function (list, d) {
        var trg = old_filter.find(function (h) {
          return h.code === d.code;
        });
        if (trg) list.push(trg);else list.push(d);
        return list;
      }, []);
    }
  }, {
    key: "changeFilter",
    value: function changeFilter(selected_item) {
      var filter = this.filter();
      this.filter(filter.map(function (old_item) {
        var new_item = _objectSpread({}, old_item);

        if (new_item.code === selected_item.code) new_item.selected = !new_item.selected;
        return new_item;
      }));
    }
  }, {
    key: "clearAllFilter",
    value: function clearAllFilter() {
      var filter = this.filter();

      var _iterator4 = _createForOfIteratorHelper(filter),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var item = _step4.value;
          item.selected = false;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "checkAllFilter",
    value: function checkAllFilter() {
      var filter = this.filter();

      var _iterator5 = _createForOfIteratorHelper(filter),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var item = _step5.value;
          item.selected = true;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "filtering",
    value: function filtering(cards) {
      var filter = this.filter();
      if (filter.length === 0) return cards;
      var filter_ht = filter.reduce(function (ht, d) {
        ht[d.code] = d.selected;
        return ht;
      }, {});
      return cards.filter(function (d) {
        if (!filter_ht[d._type]) return false;
        return true;
      });
    }
    /***** **************************************************************** *****/

    /*****   masonry                                                        *****/

    /***** **************************************************************** *****/

  }, {
    key: "makeMasonryOptions",
    value: function makeMasonryOptions() {
      return {
        itemSelector: '.' + this._options.item_name,
        columnWidth: this._options.column_width,
        gutter: this._options.gutter
      };
    }
  }, {
    key: "calPoolWidth",
    value: function calPoolWidth(dimensions) {
      var options = this._options;
      var column_width = options.column_width;
      var screen_width = dimensions.width;
      var gutter = options.gutter;
      var max_w = screen_width - column_width;
      var col_w = column_width + gutter * 2;
      var max_col = Math.floor(max_w / col_w);
      return max_col * col_w;
    }
  }]);

  return Core;
}();

exports["default"] = Core;