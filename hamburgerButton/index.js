'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hamburger = function Hamburger(_ref) {
    var open = _ref.open,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'button',
        { 'aria-expanded': open ? 'true' : 'false', onClick: onClick, className: 'jsx-' + _style4.default.__scopedHash
        },
        _react2.default.createElement('i', {
            className: 'jsx-' + _style4.default.__scopedHash
        }),
        _react2.default.createElement(_style2.default, {
            styleId: _style4.default.__scopedHash,
            css: _style4.default.__scoped
        })
    );
};
exports.default = Hamburger;
//# sourceMappingURL=index.jsx.map