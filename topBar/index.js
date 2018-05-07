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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBar = function TopBar(_ref) {
      var className = _ref.className,
          _ref$fixed = _ref.fixed,
          fixed = _ref$fixed === undefined ? false : _ref$fixed,
          _ref$bgShadedTranspar = _ref.bgShadedTransparent,
          bgShadedTransparent = _ref$bgShadedTranspar === undefined ? false : _ref$bgShadedTranspar,
          _ref$bgTransparent = _ref.bgTransparent,
          bgTransparent = _ref$bgTransparent === undefined ? false : _ref$bgTransparent,
          leftItem = _ref.leftItem,
          rightItem = _ref.rightItem,
          centerItem = _ref.centerItem;
      return _react2.default.createElement(
            'header',
            {
                  className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)([(0, _utils2.default)({
                        topBar: true,
                        'topBar--fixed': fixed,
                        'topBar--bgShadedTransparent': bgShadedTransparent,
                        'topBar--bgTransparent': bgTransparent
                  }), className]) || '')
            },
            leftItem ? _react2.default.createElement(
                  'div',
                  {
                        className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)((0, _utils2.default)({ 'topBar-left': true })) || '')
                  },
                  leftItem
            ) : null,
            centerItem ? _react2.default.createElement(
                  'div',
                  {
                        className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)((0, _utils2.default)({ 'topBar-center': true })) || '')
                  },
                  centerItem
            ) : null,
            rightItem ? _react2.default.createElement(
                  'div',
                  {
                        className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)((0, _utils2.default)({ 'topBar-right': true })) || '')
                  },
                  rightItem
            ) : null,
            _react2.default.createElement(_style2.default, {
                  styleId: _style4.default.__scopedHash,
                  css: _style4.default.__scoped
            })
      );
};
exports.default = TopBar;
//# sourceMappingURL=index.jsx.map