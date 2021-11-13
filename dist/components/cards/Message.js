"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Message;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** ****************************************************************
 *   props = {
 *     data: {
 *       message: {
 *         title: string,
 *         contents: string,
 *       },
 *     },
 *     masonry_item: {
 *       column_width: number,
 *       item_name:    string,
 *     },
 *   }
 * **************************************************************** */
function Message(props) {
  var data = props.source.data;
  var masonry_item = props.source.masonry_item;
  var col = data.size.col || 1;
  var style = {
    width: masonry_item.column_width * col,
    height: 'auto',
    // masonry_item.column_width * row,
    borderRadius: 8,
    marginBottom: 22,
    fontSize: 14,
    head: {
      padding: '11px 22px'
    },
    body: {
      padding: 11,
      wordBreak: 'break-word'
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: masonry_item.item_name,
    style: style
  }, /*#__PURE__*/_react["default"].createElement("article", {
    className: "message is-danger"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "message-header",
    style: style.head
  }, /*#__PURE__*/_react["default"].createElement("p", null, data.message.title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "message-body",
    style: style.body
  }, data.message.contents)));
}