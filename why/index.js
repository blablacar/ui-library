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

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

var _questionIcon = require('../icon/questionIcon');

var _questionIcon2 = _interopRequireDefault(_questionIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Why = function Why(_ref) {
    var className = _ref.className,
        children = _ref.children,
        title = _ref.title,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'button',
        { type: 'button', title: title, onClick: onClick, className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)([(0, _utils2.default)({ why: true }), className]) || '')
        },
        _react2.default.createElement(_questionIcon2.default, null),
        _react2.default.createElement(
            'span',
            {
                className: 'jsx-' + _style4.default.__scopedHash
            },
            children
        ),
        _react2.default.createElement(_style2.default, {
            styleId: _style4.default.__scopedHash,
            css: _style4.default.__scoped
        })
    );
};
exports.default = Why;
//# sourceMappingURL=index.jsx.map