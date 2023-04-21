"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Link;

var _react = _interopRequireDefault(require("react"));

var _ABlank = _interopRequireDefault(require("./ABlank.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var style = {
  forground: {
    position: 'absolute',
    background: 'rgba(255,255,255,0.8)',
    width: '100%',
    height: '100%',
    padding: 22,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    fontWeight: 'bold',
    textShadow: '0px 0px 10px #fff'
  }
};

function makeContents(v) {
  if (Array.isArray(v)) return v.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      key: i
    }, d);
  });
  if ('string' === typeof v) return makeContents(v.split('\n'));
  return v;
}
/** **************************************************************** *
 *   props = {
 *     data: {
 *       size: {
 *         col: number,
 *         row: number,
 *       },
 *       wallpaper: {
 *         path: string,
 *       },
 *       href: string,
 *       label: {
 *         contents: string,
 *       }
 *     },
 *     masonry_item: {
 *       column_width: number,
 *       item_name:    string,
 *     },
 *   }
 * **************************************************************** */


function Link(props) {
  var data = props.source.data;
  var masonry_item = props.source.masonry_item;
  var callbacks = props.source.callbacks;
  var col = data.size.col || 1;
  var row = data.size.row || 1;
  var style_root = {
    width: masonry_item.column_width * col + (col - 1) * masonry_item.gutter,
    height: masonry_item.column_width * row,
    borderRadius: 8,
    marginBottom: 22
  };
  var style_background = {
    position: 'absolute',
    background: 'rgba(255,255,255,0.8)',
    width: '100%',
    height: '100%',
    padding: 22,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url(".concat(data.wallpaper.path, ")"),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
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
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: style_background
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: style.forground,
    onClick: click,
    onDoubleClick: dblclick
  }, /*#__PURE__*/_react["default"].createElement(_ABlank["default"], {
    href: data.href,
    style: style.link
  }, makeContents(data.label.contents))));
}