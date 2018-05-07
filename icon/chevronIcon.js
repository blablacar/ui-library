'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _branding = require('../_utils/branding');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var className = _ref.className,
        _ref$down = _ref.down,
        down = _ref$down === undefined ? false : _ref$down,
        _ref$iconColor = _ref.iconColor,
        iconColor = _ref$iconColor === undefined ? _branding.color.icon : _ref$iconColor,
        _ref$left = _ref.left,
        left = _ref$left === undefined ? false : _ref$left,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 24 : _ref$size,
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
        _react2.default.createElement('polyline', _extends({ fill: 'none', stroke: iconColor, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '10', points: '9 18 15 12 9 6' }, down && { transform: 'rotate(90 12 12)' }, left && { transform: 'rotate(180 12 12)' }))
    );
};
//# sourceMappingURL=chevronIcon.jsx.map