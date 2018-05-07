'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _branding = require('../_utils/branding');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$bgColor = _ref.bgColor,
      bgColor = _ref$bgColor === undefined ? _branding.color.white : _ref$bgColor,
      className = _ref.className,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 0 : _ref$fill,
      _ref$iconColor = _ref.iconColor,
      iconColor = _ref$iconColor === undefined ? _branding.color.icon : _ref$iconColor,
      size = _ref.size,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title;

  var offset = fill * 100 + '%';
  // needs to be unique, otherwise all stars will use the first defined linear gradient
  var id = 'gradient-' + fill;
  return _react2.default.createElement(
    'svg',
    { viewBox: '-2 -4 84 82', xmlns: 'http://www.w3.org/2000/svg', className: (0, _classcat2.default)(['kirk-icon', className]), width: size, height: size, 'aria-hidden': title.length === 0 },
    title && _react2.default.createElement(
      'title',
      null,
      title
    ),
    _react2.default.createElement(
      'linearGradient',
      { y2: '0%', x2: '100%', y1: '0%', x1: '0%', id: id },
      _react2.default.createElement('stop', { stopColor: iconColor, offset: offset }),
      _react2.default.createElement('stop', { stopColor: bgColor, offset: '0%' })
    ),
    _react2.default.createElement('path', { stroke: iconColor, strokeWidth: 4, fill: 'url(#' + id + ')', d: 'M 40.000 60.000 L 63.511 72.361 L 59.021 46.180 L 78.042 27.639 L 51.756 23.820 L 40.000 0.000 L 28.244 23.820 L 1.958 27.639 L 20.979 46.180 L 16.489 72.361 L 40.000 60.000' })
  );
};
//# sourceMappingURL=starIcon.jsx.map