'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _starIcon = require('../icon/starIcon');

var _starIcon2 = _interopRequireDefault(_starIcon);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidateStars = function ValidateStars(star) {
    return !(star < 0 || star > 5);
};
var StarIcon = function StarIcon(_ref) {
    var offset = _ref.offset;
    return _react2.default.createElement(
        'div',
        { className: 'star' },
        _react2.default.createElement(_starIcon2.default, { fill: offset, size: '14' }),
        _react2.default.createElement(
            'style',
            null,
            _style2.default
        )
    );
};
var Stars = function Stars(_ref2) {
    var stars = _ref2.stars,
        _ref2$className = _ref2.className,
        className = _ref2$className === undefined ? '' : _ref2$className;
    return _react2.default.createElement(
        'div',
        { className: (0, _classcat2.default)(className) },
        ValidateStars(stars) && Array.from({ length: 5 }, function (v, index) {
            var filled = stars - index;
            var result = filled > 0 ? Math.min(1, filled) : 0;
            return _react2.default.createElement(StarIcon, { key: index, offset: result });
        })
    );
};
exports.default = Stars;
//# sourceMappingURL=index.jsx.map