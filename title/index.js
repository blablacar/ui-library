'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isHeadingAvailable = undefined;

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isHeadingAvailable = exports.isHeadingAvailable = function isHeadingAvailable(level) {
    return Number(level) >= 1 && Number(level) <= 6;
};
var Title = function Title(_ref) {
    var className = _ref.className,
        children = _ref.children,
        _ref$headingLevel = _ref.headingLevel,
        headingLevel = _ref$headingLevel === undefined ? 1 : _ref$headingLevel;

    if (!isHeadingAvailable(headingLevel)) {
        return null;
    }
    var Heading = 'h' + headingLevel;
    return _react2.default.createElement(
        Heading,
        { className: (0, _classcat2.default)(['kirk-title', className]) },
        children,
        _react2.default.createElement(_style2.default, {
            styleId: _style4.default.__scopedHash,
            css: _style4.default.__scoped
        })
    );
};
exports.default = Title;
//# sourceMappingURL=index.jsx.map