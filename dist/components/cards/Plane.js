"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Plane;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Plane(props) {
  var masonry_item = props.source.masonry_item;
  var col = props.col || 3;
  var style = {
    width: masonry_item.column_width * col + (col - 1) * masonry_item.gutter,
    height: 'auto',
    borderRadius: 8,
    marginBottom: 22,
    fontSize: 14
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: masonry_item.item_name,
    style: style
  }, props.children);
}