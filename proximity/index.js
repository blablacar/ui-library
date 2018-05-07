'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Distances = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _branding = require('../_utils/branding');

var _proximityIcon = require('../icon/proximityIcon');

var _proximityIcon2 = _interopRequireDefault(_proximityIcon);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Distances = exports.Distances = undefined;
(function (Distances) {
    Distances["NONE"] = "NONE";
    Distances["CLOSE"] = "CLOSE";
    Distances["MIDDLE"] = "MIDDLE";
    Distances["FAR"] = "FAR";
})(Distances || (exports.Distances = Distances = {}));
var size = '20px';
var getColorAndTitle = function getColorAndTitle(index, value, title) {
    var defaultParams = { title: '', iconColor: _branding.color.disabled };
    switch (value) {
        case Distances.CLOSE:
            return index === value ? {
                title: title ? title : defaultParams.title,
                iconColor: _branding.color.proximityClose
            } : defaultParams;
        case Distances.MIDDLE:
            return index === value ? {
                title: title ? title : defaultParams.title,
                iconColor: _branding.color.proximityMiddle
            } : defaultParams;
        case Distances.FAR:
            return index === value ? {
                title: title ? title : defaultParams.title,
                iconColor: _branding.color.proximityFar
            } : defaultParams;
        default:
            return defaultParams;
    }
};
var Proximity = function Proximity(_ref) {
    var value = _ref.value,
        title = _ref.title,
        className = _ref.className;
    return _react2.default.createElement(
        'div',
        {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-proximity', className]) || '')
        },
        [Distances.CLOSE, Distances.MIDDLE, Distances.FAR].map(function (distance) {
            return _react2.default.createElement(_proximityIcon2.default, _extends({ key: distance, size: size }, getColorAndTitle(distance, value, title)));
        }),
        _react2.default.createElement(_style2.default, {
            styleId: _style4.default.__scopedHash,
            css: _style4.default.__scoped
        })
    );
};
exports.default = Proximity;
//# sourceMappingURL=index.jsx.map