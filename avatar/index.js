'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IdCheck = undefined;

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

var _checkIcon = require('../icon/checkIcon');

var _checkIcon2 = _interopRequireDefault(_checkIcon);

var _utils = require('../_utils');

var _utils2 = _interopRequireDefault(_utils);

var _branding = require('../_utils/branding');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IdCheck = exports.IdCheck = function IdCheck(_ref) {
    var _ref$checked = _ref.checked,
        checked = _ref$checked === undefined ? false : _ref$checked,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? null : _ref$title;
    return _react2.default.createElement(
        'span',
        {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-idCheck'
        },
        _react2.default.createElement(_checkIcon2.default, { size: '100%', title: title, iconColor: _branding.color.success }),
        _react2.default.createElement(_style2.default, {
            styleId: _style4.default.__scopedHash,
            css: _style4.default.__scoped
        })
    );
};
var Avatar = function Avatar(_ref2) {
    var medium = _ref2.medium,
        large = _ref2.large,
        className = _ref2.className,
        checked = _ref2.checked,
        image = _ref2.image,
        alt = _ref2.alt,
        title = _ref2.title;
    return _react2.default.createElement(
        'div',
        {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)([(0, _utils2.default)({ medium: medium, large: large, image: !!image }), className]) || '')
        },
        image && _react2.default.createElement('img', { src: image, alt: alt, className: 'jsx-' + _style4.default.__scopedHash
        }),
        checked && _react2.default.createElement(IdCheck, { checked: checked, title: title }),
        _react2.default.createElement(_style2.default, {
            styleId: _style4.default.__scopedHash,
            css: _style4.default.__scoped
        })
    );
};
exports.default = Avatar;
//# sourceMappingURL=index.jsx.map