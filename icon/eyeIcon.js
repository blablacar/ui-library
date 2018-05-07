'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classcat = require('classcat');

var _classcat2 = _interopRequireDefault(_classcat);

var _branding = require('../_utils/branding');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var className = _ref.className,
        _ref$iconColor = _ref.iconColor,
        iconColor = _ref$iconColor === undefined ? _branding.color.icon : _ref$iconColor,
        _ref$off = _ref.off,
        off = _ref$off === undefined ? false : _ref$off,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 24 : _ref$size,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? '' : _ref$title;

    var svgProps = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: iconColor,
        strokeWidth: '1',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className: (0, _classcat2.default)(['kirk-icon', className]),
        contentScriptType: 'application/ecmascript'
    };
    /* tslint:disable */
    return off ? _react2.default.createElement(
        'svg',
        _extends({}, svgProps, { 'aria-hidden': title.length === 0 }),
        title && _react2.default.createElement(
            'title',
            null,
            title
        ),
        _react2.default.createElement('path', { d: 'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24' }),
        _react2.default.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' })
    ) : _react2.default.createElement(
        'svg',
        _extends({}, svgProps, { 'aria-hidden': title.length === 0 }),
        title && _react2.default.createElement(
            'title',
            null,
            title
        ),
        _react2.default.createElement('path', { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }),
        _react2.default.createElement('circle', { cx: '12', cy: '12', r: '3' })
    );
    /* tslint:enable */
};
//# sourceMappingURL=eyeIcon.jsx.map