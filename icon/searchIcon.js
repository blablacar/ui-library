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
  var className = _ref.className,
      _ref$iconColor = _ref.iconColor,
      iconColor = _ref$iconColor === undefined ? _branding.color.icon : _ref$iconColor,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 24 : _ref$size,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title;
  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', className: (0, _classcat2.default)(['kirk-icon', className]), stroke: iconColor, width: size, 'aria-hidden': title.length === 0 },
    title && _react2.default.createElement(
      'title',
      null,
      title
    ),
    _react2.default.createElement(
      'g',
      { fill: 'none', strokeWidth: '1', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '10' },
      _react2.default.createElement('line', { x1: '22', y1: '22', x2: '16.4', y2: '16.4' }),
      _react2.default.createElement('circle', { cx: '10', cy: '10', r: '9' })
    )
  );
};
//# sourceMappingURL=searchIcon.jsx.map