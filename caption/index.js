'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderSecondary = undefined;

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSecondary = exports.renderSecondary = function renderSecondary(href, secondaryText) {
    return href ? _react2.default.createElement(
        _button2.default,
        { unstyled: true, href: href },
        secondaryText
    ) : _react2.default.createElement(
        'span',
        null,
        secondaryText
    );
};
var Caption = function Caption(_ref) {
    var className = _ref.className,
        children = _ref.children,
        href = _ref.href,
        secondaryText = _ref.secondaryText,
        isoDate = _ref.isoDate;
    return _react2.default.createElement(
        'div',
        {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-caption', className]) || '')
        },
        _react2.default.createElement(
            'time',
            { dateTime: isoDate || null, className: 'jsx-' + _style4.default.__scopedHash
            },
            children
        ),
        secondaryText && _react2.default.createElement(
            'span',
            {
                className: 'jsx-' + _style4.default.__scopedHash
            },
            ' ',
            '-',
            ' ',
            renderSecondary(href, secondaryText)
        ),
        _react2.default.createElement(_style2.default, {
            styleId: _style4.default.__scopedHash,
            css: _style4.default.__scoped
        })
    );
};
exports.default = Caption;
// @TODO
// isoDate(props, propName, componentName) {
//   if (props[propName]) {
//     const validDate = new Date(props[propName]).getTime()
//     if (isNaN(validDate)) {
//       return new Error(
//         `Invalid prop ${propName} supplied to ${componentName}. Not a valid ISO date.`,
//       )
//     }
//   }
//   return null
// },
//# sourceMappingURL=index.jsx.map