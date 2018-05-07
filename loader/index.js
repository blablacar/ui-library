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

var _utils = require('../_utils');

var _utils2 = _interopRequireDefault(_utils);

var _branding = require('../_utils/branding');

var _circleIcon = require('../icon/circleIcon');

var _circleIcon2 = _interopRequireDefault(_circleIcon);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
    var className = _ref.className,
        _ref$inline = _ref.inline,
        inline = _ref$inline === undefined ? false : _ref$inline,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 48 : _ref$size;
    return _react2.default.createElement(
        'div',
        {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)([(0, _utils2.default)({ loader: true, 'loader--fullScreen': !inline }), className]) || '')
        },
        _react2.default.createElement(_circleIcon2.default, { iconColor: _branding.color.success, size: size, spinning: true }),
        _react2.default.createElement(_style2.default, {
            styleId: _style4.default.__scopedHash,
            css: _style4.default.__scoped
        })
    );
};
exports.default = Loader;
//# sourceMappingURL=index.jsx.map