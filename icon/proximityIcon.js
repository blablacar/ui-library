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
        title = _ref.title;
    return _react2.default.createElement(
        'svg',
        { viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg', className: (0, _classcat2.default)(['kirk-icon', className]), width: size, height: size, 'aria-hidden': title.length === 0 },
        title && _react2.default.createElement(
            'title',
            null,
            title
        ),
        _react2.default.createElement('path', { fill: iconColor
            // tslint:disable-next-line
            , d: 'M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm1.202-14.863a1.568 1.568 0 1 0 0-3.136 1.568 1.568 0 0 0 0 3.136zm.94 1.868h-.005a1.568 1.568 0 0 0-1.563-1.554h-.007c-2.252 0-3.896 1.32-4.288 2.692L5.5 11.051H6.926l.723-2.72 1.166-.825-.874 3.264L6.003 18h1.569l1.83-5.661 1.526 1.269.314 4.392h1.528v-5.02l-1.757-1.756.473-1.767a3.753 3.753 0 0 0 2.853 1.313h.314V9.515a2.51 2.51 0 0 1-2.51-2.51z' })
    );
};
//# sourceMappingURL=proximityIcon.jsx.map