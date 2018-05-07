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

var _rating = require('../rating');

var _rating2 = _interopRequireDefault(_rating);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _avatar = require('../avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _arrowIcon = require('../icon/arrowIcon');

var _arrowIcon2 = _interopRequireDefault(_arrowIcon);

var _utils = require('../_utils');

var _utils2 = _interopRequireDefault(_utils);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = function Profile(_ref) {
  var className = _ref.className,
      medium = _ref.medium,
      title = _ref.title,
      picture = _ref.picture,
      checked = _ref.checked,
      alt = _ref.alt,
      ratingsLabel = _ref.ratingsLabel,
      info = _ref.info,
      action = _ref.action,
      _ref$score = _ref.score,
      score = _ref$score === undefined ? 0 : _ref$score,
      _ref$ratings = _ref.ratings,
      ratings = _ref$ratings === undefined ? 0 : _ref$ratings;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-profile', (0, _utils2.default)({ medium: medium }), className]) || '')
    },
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-description'
      },
      _react2.default.createElement(
        'span',
        {
          className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-title'
        },
        title
      ),
      ratings > 0 && _react2.default.createElement(
        _rating2.default,
        { ratings: ratings, score: score },
        ratingsLabel
      ),
      _react2.default.createElement(
        'span',
        {
          className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-secondaryInfo'
        },
        info
      )
    ),
    picture && picture.length > 0 && _react2.default.createElement(_avatar2.default, { image: picture, alt: alt, checked: checked, className: 'kirk-picture', medium: medium }),
    action && action.length > 0 && _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + _style4.default.__scopedHash
      },
      _react2.default.createElement(
        _button2.default,
        { unstyled: true, title: action },
        _react2.default.createElement(_arrowIcon2.default, { right: true })
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _style4.default.__scopedHash,
      css: _style4.default.__scoped
    })
  );
};
exports.default = Profile;
//# sourceMappingURL=index.jsx.map