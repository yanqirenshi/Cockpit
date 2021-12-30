"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Cockpit;

var _react = _interopRequireDefault(require("react"));

var _Cards = _interopRequireDefault(require("./Cards.js"));

var _Controller = _interopRequireDefault(require("./Controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = {
  width: '100%',
  height: '100%',
  pool: {
    height: 'calc(100% - 45px)',
    width: '100%',
    position: 'relative',
    background: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    veil: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      background: 'rgba(238, 238, 238, 0.9)'
    },
    forground: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      padding: 22,
      paddingLeft: 77,
      paddingRight: 77,
      paddingBottom: 222,
      overflow: 'auto'
    }
  }
};

function merge(props, key, style) {
  var props_style = props.style;
  if (!props_style) return null;
  var target = props_style[key];
  if (!target) return null;
  return _objectSpread(_objectSpread({}, style), target);
}

function Cockpit(props) {
  var core = props.core;
  var loading = props.loading;
  var filter = props.filter;
  var callbacks = props.callbacks;
  var children = props.children || [];

  var style_veil = _objectSpread({}, style.pool.veil);

  var style_forground = _objectSpread({}, style.pool.forground);

  if (children.length === 0) {
    style_veil.display = 'none';
    style_forground.display = 'none';
  }

  if (props.veil_color) style_veil.background = props.veil_color;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Controller["default"], {
    loading: loading,
    filter: filter,
    callbacks: callbacks
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: style.pool
  }, props.background && /*#__PURE__*/_react["default"].createElement("div", {
    style: style.pool.background
  }, props.background), /*#__PURE__*/_react["default"].createElement("div", {
    style: style_veil
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: style_forground
  }, /*#__PURE__*/_react["default"].createElement(_Cards["default"], {
    core: core
  }, children))));
}