"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ABlank;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = {
  notfound: {
    background: '#eeeeee',
    borderRadius: 2,
    paddingRight: 3,
    paddingLeft: 3
  },
  normal: {
    color: 'inherit',
    textDecoration: 'underline',
    textUnderlineOffset: 2,
    textDecorationColor: '#ddd',
    textDecorationStyle: 'dotted'
  }
};

function ABlank(props) {
  var style_root = _objectSpread(_objectSpread({}, style.normal), props.style || {});

  return /*#__PURE__*/_react["default"].createElement("a", {
    style: style_root,
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.label || props.children || props.href);
}