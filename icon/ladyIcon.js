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
    { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', className: (0, _classcat2.default)(['kirk-icon', className]), stroke: iconColor, width: size, height: size, 'aria-hidden': title.length === 0 },
    title && _react2.default.createElement(
      'title',
      null,
      title
    ),
    _react2.default.createElement(
      'g',
      { fill: 'none', strokeWidth: '1', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '10' },
      _react2.default.createElement('path', { d: 'M12 17v6M9 21h6' }),
      _react2.default.createElement('circle', { cx: '12', cy: '9', r: '8' })
    )
  );
};
//# sourceMappingURL=ladyIcon.jsx.map