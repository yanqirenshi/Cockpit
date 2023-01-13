"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SmallLarge;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = {
  head: {
    fontSize: 14,
    padding: '8px 11px',
    display: 'flex'
  },
  haed_left: {
    flexGrow: 1
  }
};

function title(data, card_data) {
  return card_data.head.title.contents;
}

function SmallLarge(props) {
  var data = props.source.data;
  var masonry_item = props.source.masonry_item;
  var callbacks = props.source.callbacks.sl;
  var open = data.open;
  var card_data = open ? data.large : data.small;
  var col = card_data.size.col || 1;
  var style_root = {
    width: masonry_item.column_width * col + (col - 1) * masonry_item.gutter,
    height: 'auto',
    borderRadius: 8,
    marginBottom: 22
  };

  var clickSwitch = function clickSwitch() {
    return callbacks["switch"](data.id);
  };

  var moveLast = function moveLast() {
    return callbacks.moveLast(data);
  };

  var click = function click(e) {
    return e.ctrlKey && moveLast();
  };

  var dblclick = function dblclick(e) {
    return moveLast();
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: masonry_item.item_name,
    style: style_root
  }, /*#__PURE__*/_react["default"].createElement("nav", {
    className: "panel",
    style: {
      border: '1px solid #eee',
      boxShadow: 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-heading",
    style: _objectSpread(_objectSpread({}, style.head), card_data.head.style || {}),
    onClick: click,
    onDoubleClick: dblclick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: style.haed_left
  }, title(data, card_data)), /*#__PURE__*/_react["default"].createElement("div", null, !open && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faWindowMaximize,
    onClick: clickSwitch
  }), open && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faWindowMinimize,
    onClick: clickSwitch
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-block",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, props.children))));
}