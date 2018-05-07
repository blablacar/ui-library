'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _menuItemStyle = require('./menuItemStyle');

var _menuItemStyle2 = _interopRequireDefault(_menuItemStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(_ref) {
    var id = _ref.id,
        _ref$label = _ref.label,
        label = _ref$label === undefined ? '' : _ref$label,
        _ref$url = _ref.url,
        url = _ref$url === undefined ? '' : _ref$url,
        _ref$separator = _ref.separator,
        separator = _ref$separator === undefined ? false : _ref$separator;
    return _react2.default.createElement(
        'li',
        { id: id, role: 'menuitem', className: 'jsx-' + _menuItemStyle2.default.__scopedHash + ' ' + ((0, _classcat2.default)({ separator: separator }) || '')
        },
        !separator && _react2.default.createElement(
            'a',
            { href: url, className: 'jsx-' + _menuItemStyle2.default.__scopedHash
            },
            label
        ),
        _react2.default.createElement(_style2.default, {
            styleId: _menuItemStyle2.default.__scopedHash,
            css: _menuItemStyle2.default.__scoped
        })
    );
};
exports.default = MenuItem;
//# sourceMappingURL=menuItem.jsx.map