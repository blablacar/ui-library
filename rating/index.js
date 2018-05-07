'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _stars = require('../stars');

var _stars2 = _interopRequireDefault(_stars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rating = function Rating(_ref) {
    var _ref$className = _ref.className,
        className = _ref$className === undefined ? '' : _ref$className,
        _ref$score = _ref.score,
        score = _ref$score === undefined ? 0 : _ref$score,
        _ref$ratings = _ref.ratings,
        ratings = _ref$ratings === undefined ? 0 : _ref$ratings,
        _ref$children = _ref.children,
        children = _ref$children === undefined ? '' : _ref$children;
    return _react2.default.createElement(
        'div',
        { className: (0, _classcat2.default)(['kirk-rating', className]) },
        _react2.default.createElement(_stars2.default, { stars: score }),
        _react2.default.createElement(
            'span',
            null,
            ratings,
            ' ',
            children
        ),
        _react2.default.createElement(
            'style',
            null,
            _style2.default
        )
    );
};
exports.default = Rating;
//# sourceMappingURL=index.jsx.map