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

var _branding = require('../_utils/branding');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$absolute = _ref.absolute,
      absolute = _ref$absolute === undefined ? false : _ref$absolute,
      className = _ref.className,
      _ref$iconColor = _ref.iconColor,
      iconColor = _ref$iconColor === undefined ? _branding.color.icon : _ref$iconColor,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 24 : _ref$size,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title,
      _ref$validate = _ref.validate,
      validate = _ref$validate === undefined ? false : _ref$validate;
  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, 'aria-hidden': title.length === 0, className: 'jsx-2744190216' + ' ' + ((0, _classcat2.default)(['kirk-icon', className, { validate: validate, absolute: absolute }]) || '')
    },
    title && _react2.default.createElement(
      'title',
      {
        className: 'jsx-2744190216'
      },
      title
    ),
    _react2.default.createElement('path', { d: 'M6.5 12.5l4 4 8-8', fill: 'none', stroke: iconColor, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '10', className: 'jsx-2744190216'
    }),
    _react2.default.createElement(_style2.default, {
      styleId: '2744190216',
      css: '.absolute.jsx-2744190216{position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);}.validate.jsx-2744190216 path.jsx-2744190216{stroke-dasharray:24;stroke-dashoffset:-24;stroke-linecap:round;-webkit-animation:dash-jsx-2744190216 0.5s cubic-bezier(0.650,0.000,0.450,1.000) forwards;animation:dash-jsx-2744190216 0.5s cubic-bezier(0.650,0.000,0.450,1.000) forwards;}@-webkit-keyframes dash-jsx-2744190216{to{stroke-dashoffset:0;}}@keyframes dash-jsx-2744190216{to{stroke-dashoffset:0;}}'
    })
  );
};
//# sourceMappingURL=checkIcon.jsx.map