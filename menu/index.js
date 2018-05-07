'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _menuItem = require('./menuItem');

var _menuItem2 = _interopRequireDefault(_menuItem);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
    var className = _ref.className,
        items = _ref.items;
    return _react2.default.createElement(
        'ul',
        { role: 'menu', className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(className) || '')
        },
        items.map(function (item) {
            return _react2.default.createElement(_menuItem2.default, _extends({}, item, { key: item.id }));
        }),
        _react2.default.createElement(_style2.default, {
            styleId: _style4.default.__scopedHash,
            css: _style4.default.__scoped
        })
    );
};
exports.default = Menu;
//# sourceMappingURL=index.jsx.map