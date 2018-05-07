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

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PushInfo = function PushInfo(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      headline = _ref.headline,
      content = _ref.content;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-pushInfo', className]) || '')
    },
    icon && _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-pushInfo-icon'
      },
      icon
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + _style4.default.__scopedHash
      },
      _react2.default.createElement(
        'h2',
        {
          className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-pushInfo-headline', { 'kirk-pushInfo-headline--standalone': !content }]) || '')
        },
        headline
      ),
      content && _react2.default.createElement(
        'p',
        {
          className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-pushInfo-content'
        },
        content
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _style4.default.__scopedHash,
      css: _style4.default.__scoped
    })
  );
};
exports.default = PushInfo;
//# sourceMappingURL=index.jsx.map