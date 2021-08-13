"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Cockpit;

var _react = _interopRequireDefault(require("react"));

var _Cards = _interopRequireDefault(require("./Cards.js"));

var _Controller = _interopRequireDefault(require("./Controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var style = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  updatedat: {
    display: 'none'
  },
  pool: {
    flexGrow: 1,
    overflow: 'auto',
    paddingTop: 22,
    paddingBottom: 222
  }
};

function Cockpit(props) {
  var core = props.core;
  var filter = props.filter;
  var callbacks = props.callbacks;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style.root
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Controller["default"], {
    filter: filter,
    callbacks: callbacks
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: style.pool
  }, /*#__PURE__*/_react["default"].createElement(_Cards["default"], {
    core: core
  }, props.children)));
}