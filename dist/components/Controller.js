"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controller;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var style = {
  container: {
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  item: {
    marginRight: 22,
    box: {
      marginRight: 6
    }
  },
  icon: {
    fontSize: 14,
    marginTop: -2,
    marginRight: 22,
    marginLeft: 7,
    color: '#888'
  }
};

function Controller(props) {
  var loading = props.loading;
  var filter = props.filter;
  var callbacks = props.callbacks;
  var callbacks_filter = callbacks.filter;

  var change = function change(e) {
    var code = e.target.getAttribute('code');
    var filter_item = filter.find(function (d) {
      return d.code === code;
    });
    callbacks_filter.change(filter_item);
  };

  var refresh = function refresh() {
    return callbacks.refresh();
  };

  var clearAll = function clearAll() {
    return callbacks_filter.clearAll();
  };

  var checkAll = function checkAll() {
    return callbacks_filter.checkAll();
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: style.container
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: style.icon
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button is-small",
    onClick: refresh,
    disabled: loading
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    style: {},
    icon: _freeSolidSvgIcons.faSyncAlt
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: style.icon
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    style: {},
    icon: _freeSolidSvgIcons.faFilter
  })), filter.filter(function (d) {
    return d.code;
  }).map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement("label", {
      key: d.code,
      className: "checkbox",
      style: style.item
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "checkbox",
      style: style.item.box,
      checked: d.selected,
      code: d.code,
      onChange: change
    }), d.code);
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: style.icon
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button is-small",
    onClick: clearAll
  }, "Clear All"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button is-small",
    onClick: checkAll
  }, "Check All"))));
}