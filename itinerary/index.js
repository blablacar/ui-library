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

var Itinerary = function Itinerary(_ref) {
  var className = _ref.className,
      departure = _ref.departure,
      arrival = _ref.arrival,
      showFromDistance = _ref.showFromDistance,
      showToDistance = _ref.showToDistance,
      _ref$small = _ref.small,
      small = _ref$small === undefined ? false : _ref$small,
      _ref$headline = _ref.headline,
      headline = _ref$headline === undefined ? null : _ref$headline;
  return _react2.default.createElement(
    'ul',
    {
      className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)([className, { 'kirk-itinerary--small': small }]) || '')
    },
    headline && _react2.default.createElement(
      'li',
      {
        className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-itinerary-headline'
      },
      _react2.default.createElement(
        'span',
        {
          className: 'jsx-' + _style4.default.__scopedHash
        },
        headline
      )
    ),
    showFromDistance && _react2.default.createElement(
      'li',
      {
        className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-itinerary-fromDeparture'
      },
      _react2.default.createElement(
        'span',
        {
          className: 'jsx-' + _style4.default.__scopedHash
        },
        departure.distanceFromPoint
      )
    ),
    _react2.default.createElement(
      'li',
      {
        className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-itinerary-location kirk-itinerary--departure'
      },
      !small && _react2.default.createElement(
        'time',
        { dateTime: departure.isoDate, className: 'jsx-' + _style4.default.__scopedHash
        },
        departure.time
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _style4.default.__scopedHash
        },
        _react2.default.createElement(
          'span',
          {
            className: 'jsx-' + _style4.default.__scopedHash
          },
          departure.mainLabel
        ),
        !small && departure.subLabel && _react2.default.createElement(
          'span',
          {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-itinerary-subtext'
          },
          departure.subLabel
        )
      )
    ),
    _react2.default.createElement(
      'li',
      {
        className: 'jsx-' + _style4.default.__scopedHash + ' ' + ((0, _classcat2.default)(['kirk-itinerary-location kirk-itinerary--arrival', { 'kirk-itinerary-location--fromArrival': showToDistance }]) || '')
      },
      !small && _react2.default.createElement(
        'time',
        { dateTime: arrival.isoDate, className: 'jsx-' + _style4.default.__scopedHash
        },
        arrival.time
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _style4.default.__scopedHash
        },
        _react2.default.createElement(
          'span',
          {
            className: 'jsx-' + _style4.default.__scopedHash
          },
          arrival.mainLabel
        ),
        !small && arrival.subLabel && _react2.default.createElement(
          'span',
          {
            className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-itinerary-subtext'
          },
          arrival.subLabel
        )
      )
    ),
    showToDistance && _react2.default.createElement(
      'li',
      {
        className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'kirk-itinerary-fromArrival'
      },
      _react2.default.createElement(
        'span',
        {
          className: 'jsx-' + _style4.default.__scopedHash
        },
        arrival.distanceFromPoint
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _style4.default.__scopedHash,
      css: _style4.default.__scoped
    })
  );
};
exports.default = Itinerary;
//# sourceMappingURL=index.jsx.map