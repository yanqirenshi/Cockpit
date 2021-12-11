"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card() {
    _classCallCheck(this, Card);

    this._type = null;
    this._id = null;
    this._core = null;
    this._order = null;
  }

  _createClass(Card, [{
    key: "id",
    value: function id() {
      return this._id;
    }
  }, {
    key: "type",
    value: function type() {
      return this._type;
    }
  }, {
    key: "core",
    value: function core() {
      return this._core;
    }
  }, {
    key: "order",
    value: function order() {
      return this._order;
    }
    /***** **************************************************************** *****/

    /*****   make                                                           *****/

    /***** **************************************************************** *****/

  }, {
    key: "updatedAtByData",
    value: function updatedAtByData(d) {
      if (d.updated_at === null) return null;
      if (d.updated_at) return d.updated_at;
      return (0, _moment["default"])();
    }
  }]);

  return Card;
}();

exports["default"] = Card;