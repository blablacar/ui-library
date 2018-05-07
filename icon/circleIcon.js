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

var offset = 187;
var duration = '1.4s';
var style = new String('@-webkit-keyframes dash{0%{stroke-dashoffset:' + offset + ';}50%{stroke-dashoffset:' + offset / 4 + ';-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:' + offset + ';-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}@keyframes dash{0%{stroke-dashoffset:' + offset + ';}50%{stroke-dashoffset:' + offset / 4 + ';-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:' + offset + ';-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}}@keyframes rotator{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}}.spinning{-webkit-animation:rotator ' + duration + ' linear infinite;animation:rotator ' + duration + ' linear infinite;}circle{stroke-width:6;fill:none;stroke-linecap:round;}.spinning circle{stroke-dasharray:' + offset + ';stroke-dashoffset:0;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:dash ' + duration + ' ease-in-out infinite;animation:dash ' + duration + ' ease-in-out infinite;}.absolute{position:absolute;}');
style.__hash = '890200205';
style.__scoped = '@-webkit-keyframes dash-jsx-1496213804{0%{stroke-dashoffset:' + offset + ';}50%{stroke-dashoffset:' + offset / 4 + ';-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:' + offset + ';-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}@keyframes dash-jsx-1496213804{0%{stroke-dashoffset:' + offset + ';}50%{stroke-dashoffset:' + offset / 4 + ';-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:' + offset + ';-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}@-webkit-keyframes rotator-jsx-1496213804{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}}@keyframes rotator-jsx-1496213804{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}}.spinning.jsx-1496213804{-webkit-animation:rotator-jsx-1496213804 ' + duration + ' linear infinite;animation:rotator-jsx-1496213804 ' + duration + ' linear infinite;}circle.jsx-1496213804{stroke-width:6;fill:none;stroke-linecap:round;}.spinning.jsx-1496213804 circle.jsx-1496213804{stroke-dasharray:' + offset + ';stroke-dashoffset:0;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:dash-jsx-1496213804 ' + duration + ' ease-in-out infinite;animation:dash-jsx-1496213804 ' + duration + ' ease-in-out infinite;}.absolute.jsx-1496213804{position:absolute;}';
style.__scopedHash = '1496213804';

exports.default = function (_ref) {
  var _ref$absolute = _ref.absolute,
      absolute = _ref$absolute === undefined ? false : _ref$absolute,
      className = _ref.className,
      _ref$iconColor = _ref.iconColor,
      iconColor = _ref$iconColor === undefined ? _branding.color.icon : _ref$iconColor,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 24 : _ref$size,
      _ref$spinning = _ref.spinning,
      spinning = _ref$spinning === undefined ? false : _ref$spinning,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title;
  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 66 66', xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, 'aria-hidden': title.length === 0, className: 'jsx-' + style.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-icon', className, { spinning: spinning, absolute: absolute }]) || '')
    },
    title && _react2.default.createElement(
      'title',
      {
        className: 'jsx-' + style.__scopedHash
      },
      title
    ),
    _react2.default.createElement('circle', { cx: '33', cy: '33', r: '30', fill: 'none', stroke: iconColor, className: 'jsx-' + style.__scopedHash
    }),
    _react2.default.createElement(_style2.default, {
      styleId: style.__scopedHash,
      css: style.__scoped
    })
  );
};
//# sourceMappingURL=circleIcon.jsx.map