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
      bgColor = _ref$bgColor === undefined ? 'none' : _ref$bgColor,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 24 : _ref$size,
      _ref$strokeColor = _ref.strokeColor,
      strokeColor = _ref$strokeColor === undefined ? _branding.color.icon : _ref$strokeColor,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title;
  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', className: (0, _classcat2.default)(['kirk-icon', className]), width: size, height: size, 'aria-hidden': title.length === 0 },
    title && _react2.default.createElement(
      'title',
      null,
      title
    ),
    _react2.default.createElement(
      'g',
      { stroke: bgColor !== 'none' ? bgColor : strokeColor, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '10' },
      _react2.default.createElement('path', { fill: bgColor, d: 'M20 9c0 4.9-8 13-8 13S4 13.9 4 9c0-5.1 4.1-8 8-8s8 2.9 8 8z' }),
      _react2.default.createElement('circle', { fill: bgColor !== 'none' ? _branding.color.white : 'none', cx: '12', cy: '9', r: '3' })
    )
  );
};
//# sourceMappingURL=pinIcon.jsx.map