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

var _caption = require('../caption');

var _caption2 = _interopRequireDefault(_caption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var active = _ref.active,
      author = _ref.author,
      date = _ref.date,
      isoDate = _ref.isoDate,
      secondaryLink = _ref.secondaryLink,
      secondaryText = _ref.secondaryText,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'blockquote',
    {
      className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-message', (0, _utils2.default)({ active: active }), className]) || '')
    },
    author && _react2.default.createElement(
      'cite',
      {
        className: 'jsx-' + _style4.default.__scopedHash
      },
      author
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-label'
      },
      _react2.default.createElement(
        'p',
        {
          className: 'jsx-' + _style4.default.__scopedHash
        },
        children
      ),
      _react2.default.createElement(
        _caption2.default,
        { href: secondaryLink, secondaryText: secondaryText, isoDate: isoDate },
        date
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _style4.default.__scopedHash,
      css: _style4.default.__scoped
    })
  );
};
exports.default = Message;
//# sourceMappingURL=index.jsx.map